import SearchPortfolio from "./SearchPortfolio";
import { Link } from "react-router-dom";
import {person} from "../../../Types"
import Experiences from "./Experiences";
import Projects from "./Projects";
import Line from "../assets/Line.png"

export default function Frontpage({person} : {person : person}){

    return (
        <>
            <SearchPortfolio/>
            <section id="frontpageContent">
                <h1 id="frontPageHeader">Sjekk ut mine prosjekter</h1>
                <Projects/>
                <Link id="createProject" label="createProject" to="/createproject">+</Link>
                <section id="experiences">
                    <h2>Erfaring</h2>
                <picture className="Line">
                    <source media="(min-width:300px)" srcSet={Line}/>
                    <img src={Line} alt=""  width="150" height=""></img>
                </picture>
                    <Experiences person={person}></Experiences>
                </section>
            </section>
        </>
    )
}
