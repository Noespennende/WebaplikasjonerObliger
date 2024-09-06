import SearchPortfolio from "./SearchPortfolio";
import { useEffect, useState } from 'react'
import ArticleCard from "./ProjectCard";
import { Link } from "react-router-dom";
import {person} from "../../../Types"
import Experiences from "./Experiences";

export default function Frontpage({person} : {person : person}){

    const [articles, setArticles] = useState([])
    
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
        <>
            <SearchPortfolio/>
            <section id="frontpageContent">
                <h1 id="frontPageHeader">Sjekk ut mine prosjekter</h1>
                <section id="projectCards">
                    <ul>
                        {articles?.map((article, index) => (
                            <li key={index} className="projectCardListElements">
                                <ArticleCard header={article.header}
                                tags={article.tags}
                                image={article.image}
                                imageAlt={article.imagealt}
                                text={article.summary}
                                link={"/project/"+article.slug}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
                <Link id="createProject" label="createProject" to="/createproject">+</Link>

                <section id="experiences">
                    <Experiences person={person}></Experiences>
                </section>
            </section>
        </>
    )
}
