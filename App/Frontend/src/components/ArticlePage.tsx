import Line from "../assets/Line.png"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react'

export default function ArticlePage(){
    const { slug } = useParams()

    const [article, setArticle] = useState()

    useEffect(() => {
        const fetchJsonDataFromServer = async () => {
            await fetch("http://localhost:3999/json")
            .then((response) => response.json())
            .then((data) => {
                for (let obj of data){
                    if(obj.slug.includes(slug)){
                        setArticle(obj)
                    }
                }
            })
            .catch((error) => console.error("Data could not be found", error))
        }
        fetchJsonDataFromServer()
    },[slug])

    useEffect(() => {
    },[article])


    return (
        <>
            <section id="articlePage">
                <picture>
                    <source media="(min-width:300px)" srcSet={article?.image}/>
                    <img src={article?.image} alt={article?.imagealt} width="700" height=""></img>
                </picture>
                <article id="articleContent">
                    <div id="articlePageHeaderAndTags">
                        <h1>{article?.header}</h1>
                        <ul id="tags">
                            {article?.tags.map(((tag, index) => {
                                return <li key={"articleTags"+tag+index}>{tag}</li>
                            }))}
                        </ul>
                    </div>
                    <picture id="line">
                        <source media="(min-width:300px)" srcSet={Line}/>
                        <img src={Line} alt=""  width="130" height=""></img>
                    </picture>

                    <Link to={article?.repository} id="repositoryButton"><FaGithub /> Visit repository</Link>
                    
                    <p>{article?.article}</p>
                </article>
            </section>
        </>
    )
}