import SearchPortfolio from "./SearchPortfolio";
import ArticleCard from "./ArticleCard";
import Harbnet from "../assets/Harbnet.png"

export default function Frontpage(){

    return (
        <>
            <SearchPortfolio/>
            <section id="frontpageContent">
                <h1 id="frontPageHeader">Sjekk ut mine prosjekter</h1>
                <div id="articleCards">
                    <ArticleCard header="Header" tags="C# .Net" image={Harbnet} imageAlt="caption"
                    text="Kort men beskrivende tekst som sier noe om prosjektet. Enda litt mer tekst som erbeskrivende for prosjektet"
                    link="#"/>
                </div>
            </section>
        </>
    )
}