import {person} from "../../../Types"
import Experience from "./Experience.tsx"

export default function Experiences({person} : {person : person}){

    return (
        <ul id="experiencesList">
            {person.experiences.map((experience, index) => (
                <Experience key={"experience" + index} experience={experience}></Experience>
            ))}
        </ul>
    )
}