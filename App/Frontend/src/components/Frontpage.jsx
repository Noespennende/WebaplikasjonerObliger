import SearchPortfolio from "./SearchPortfolio";
import { useEffect, useState } from 'react'
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

export default function Frontpage(){

    const [articles, setArticles] = useState([])
    
    const fetchJsonDataFromServer = async () => {
        await fetch("http://localhost:3999/json")
        .then((response) => response.json())
        .then((data) => setArticles(data))
        .catch((error) => console.error("Data could not be found", error))
    }

    useEffect(() => {
        fetchJsonDataFromServer()
    },[])

    useEffect(() => {
    },[articles])


    return (
        <>
            <SearchPortfolio/>
            <section id="frontpageContent">
                <h1 id="frontPageHeader">Sjekk ut mine prosjekter</h1>
                <div id="articleCards">
                    <ul>
                        {articles?.map((article, index) => (
                            <li key={index} className="articleCardListElements">
                                <ArticleCard header={article.header}
                                tags={article.tags}
                                image={article.image}
                                imageAlt={article.imagealt}
                                text={article.summary}
                                link={"/article/"+article.slug}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <Link id="createArticle" label="createArticle" to="/createarticle">+</Link>
            </section>
        </>
    )
}
