import Line from "../assets/Line.png"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react'

export default function ProjectPage(){
    const { slug } = useParams()

    const [project, setproject] = useState()

    useEffect(() => {
        const fetchJsonDataFromServer = async () => {
            await fetch("http://localhost:3999/projects")
            .then((response) => response.json())
            .then((data) => {
                for (let obj of data){
                    if(obj.slug.includes(slug)){
                        setproject(obj)
                    }
                }
            })
            .catch((error) => console.error("Data could not be found", error))
        }
        fetchJsonDataFromServer()
    },[slug])

    useEffect(() => {
    },[project])


    return (
        <>
            <section id="projectPage">
                <picture>
                    <source media="(min-width:300px)" srcSet={project?.image}/>
                    <img src={project?.image} alt={project?.imagealt} width="700" height=""></img>
                </picture>
                <article id="projectContent">
                    <div id="projectPageHeaderAndTags">
                        <h1>{project?.header}</h1>
                        <ul id="tags">
                            {project?.tags.map(((tag, index) => {
                                return <li key={"projectTags"+tag+index}>{tag}</li>
                            }))}
                        </ul>
                    </div>
                    <picture id="line">
                        <source media="(min-width:300px)" srcSet={Line}/>
                        <img src={Line} alt=""  width="130" height=""></img>
                    </picture>

                    <Link to={project?.repository} id="repositoryButton"><FaGithub /> Visit repository</Link>
                    
                    <p>{project?.article}</p>
                </article>
            </section>
        </>
    )
}