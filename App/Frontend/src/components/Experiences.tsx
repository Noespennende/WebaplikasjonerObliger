import {person} from "../../../Types"
import Experience from "./Experience.tsx"

export default function Experiences({person} : {person : person}){

    return (
        <ul id="experiencesList">

            {person.experiences.length > 0 ? person.experiences.map((experience, index) => (
                <Experience key={"experience" + index} experience={experience}></Experience>
            ))
            : <li id="noExperiences">Ingen erfaringer 😞</li>
            }
        </ul>
    )
}