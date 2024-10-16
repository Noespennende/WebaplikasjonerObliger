import { useEffect, useState } from 'react'
import ProjectCard from "./ProjectCard";
import LoadingProjectCard from "./LoadingProjectCard"


export default function Projects (){

    const [articles, setArticles] = useState()
    const [loading, setLoading] = useState(false)
    
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


    useEffect(() => {
        const controller = new AbortController()
        fetchJsonDataFromServer()
        return() => controller.abort()
    },[])

    useEffect(() => {
    },[articles])

    return (
    <section id="projectCards">
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
                    : generateLoadingCards(6)
        
                }
                
                </ul>
        </section>
    )
}