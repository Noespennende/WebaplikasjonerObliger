import SearchPortfolio from "./SearchPortfolio";
import ArticleCard from "./ArticleCard";
import Harbnet from "../assets/Harbnet.png"

export default function Frontpage(){

    return (
        <>
            <SearchPortfolio/>
            <section>
                <h1>Sjekk ut mine prosjekter</h1>
                <ArticleCard header="Header" tags="C# .Net" image={Harbnet} imageAlt="caption" text="Kort men beskrivende tekst" link="#"/>
            </section>
        </>
    )
}