import { useEffect, useState } from 'react'
import ProjectCard from "./ProjectCard";
import LoadingProjectCard from "./LoadingProjectCard"


export default function Projects (){

    const [currentPageWidth, setCurrentPageWidth] = useState(window.innerWidth)
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingCardAmount, setLoadingCardAmount] = useState(3)
    const [projectCardsSectionHeight, setProjectCardsSectionHeight] = useState(200)

    const projectCardHeight = 350
    const projectCardWith = 300
    const projectCardMargin = 40
    
    //updates browser window size
    const handleWindowResize = () => {
        setCurrentPageWidth(window.innerWidth)
    }

    const calculateProjectCardsSectionHeight = () => {
        let cardsInEachRow: number
        let totalRowMargin: number

        if (currentPageWidth >= (projectCardWith * 3 + 2* projectCardMargin)){
            cardsInEachRow = 3
        } 
        else if (currentPageWidth >=  (projectCardWith * 2 + projectCardMargin)){
            cardsInEachRow = 2
        } else {
            cardsInEachRow = 1
        }

        if (loading){
            const projectCardRows = Math.ceil(loadingCardAmount/cardsInEachRow)
            totalRowMargin = projectCardRows * projectCardMargin
            return(
                projectCardHeight*projectCardRows + totalRowMargin
            )

        }

        const projectCardRows = Math.ceil(articles.length/cardsInEachRow)
        totalRowMargin = Math.ceil(projectCardRows * projectCardMargin)

        return (
            projectCardRows * projectCardHeight + totalRowMargin
        )
    }
    
    const fetchJsonDataFromServer = async () => {
        setLoading(true)
        await fetch("http://localhost:3999/projects")
        .then((response) => response.json())
        .then((data) => setArticles(data))
        .catch((error) => console.error("Data could not be found", error))
        .finally(() => setLoading(false))
    }

    const generateLoadingCards = (amount : number) => {
        return(
            Array.from({ length: amount }, (_, index) => (
                <li key={index} className="projectCardListElements">
                    <LoadingProjectCard />
                </li>
            )
            )
        )

    }

    const generateHtmlClassWhenLoaded = () => {
        const projectCardsSection = document.getElementById('projectCards')

        if (!loading && projectCardsSection) {
            projectCardsSection.classList.add('loaded')
            setProjectCardsSectionHeight(200)
        } 
        else if (loading && projectCardsSection) {
            projectCardsSection.classList.remove('loaded')
            setProjectCardsSectionHeight(500)
        }
    }

    useEffect(() => {
        //Listen to window resize and updates variables with new size
        window.addEventListener('resize', handleWindowResize)

        //Fetch projects from server
        const controller = new AbortController()
        fetchJsonDataFromServer()
        return() => controller.abort()
    },[])

    useEffect(() => {
        generateHtmlClassWhenLoaded()
    },[loading])

    useEffect(() => {
    },[articles])

    return (
    <section 
        id="projectCards"
        //animate height based on content
        style={{
            height: `${typeof projectCardsSectionHeight === 'number' ? `${calculateProjectCardsSectionHeight()}px` : "fit-content"}`
    }}
    >
            <ul>
                {!loading ? 
                (
                    articles?.length > 0 ?  
                        articles?.map((article, index) => (
                            <li key={index} className="projectCardListElements">
                                <ProjectCard header={article.header}
                                    tags={article.tags}
                                    image={article.image}
                                    imageAlt={article.imagealt}
                                    text={article.summary}
                                    link={"/project/"+article.slug}
                                    />
                                </li>
                                ))
                        : <li id="noProsjects">Ingen prosjekter 😞</li>    
                    )
                    : generateLoadingCards(loadingCardAmount)
        
                }
                
                </ul>
        </section>
    )
}