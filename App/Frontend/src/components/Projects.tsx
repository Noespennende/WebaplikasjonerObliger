import { useEffect, useState } from 'react'
import ArticleCard from "./ProjectCard";
import LoadingAnimation from "../assets/LoadingAnimation.gif"

export default function Projects (){

    const [articles, setArticles] = useState()
    
    const fetchJsonDataFromServer = async () => {
        await fetch("http://localhost:3999/projects")
        .then((response) => response.json())
        .then((data) => setArticles(data))
        .catch((error) => console.error("Data could not be found", error))
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
             
                {articles ? (
                    articles?.length > 0 ?  
                        articles?.map((article, index) => (
                            <li key={index} className="projectCardListElements">
                                <ArticleCard header={article.header}
                                    tags={article.tags}
                                    image={article.image}
                                    imageAlt={article.imagealt}
                                    text={article.summary}
                                    link={"/project/"+article.slug}
                                    />
                                </li>))
                        : <li id="noProsjects">Ingen prosjekter 😞</li>    
                    )
                    :
                    <picture className="loadingAnimation">
                        <source media="(min-width:500px)" srcSet={LoadingAnimation}/>
                        <img src={LoadingAnimation} alt=""  width="500" height="185"></img>
                    </picture>
                }
                
                </ul>
        </section>
    )
}