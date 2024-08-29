import SearchPortfolio from "./SearchPortfolio";
import { useEffect, useState } from 'react'
import ArticleCard from "./ArticleCard";
import Harbnet from "../assets/Harbnet.png"

export default function Frontpage(){

    const [articles, setArticles] = useState()

    useEffect(() => {
        const fetchJsonDataFromServer = async () => {
            fetch("http://localhost:3999/json")
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error("Data could not be found", error))
        }
        fetchJsonDataFromServer()
    },[articles])


    return (
        <>
            <SearchPortfolio/>
            <section id="frontpageContent">
                <h1 id="frontPageHeader">Sjekk ut mine prosjekter</h1>
                <div id="articleCards">
                    <ul>
                    {articles?.map((article, index) => {
                        <li key={`articlecard`+ index}>
                            <ArticleCard header="Header" tags="C# .Net" image={Harbnet} imageAlt="caption"
                            text="Kort men beskrivende tekst som sier noe om prosjektet. Enda litt mer tekst som erbeskrivende for prosjektet"
                            link="#"/>
                        </li>
                    })}
                    
                    </ul>
                </div>
            </section>
        </>
    )
}