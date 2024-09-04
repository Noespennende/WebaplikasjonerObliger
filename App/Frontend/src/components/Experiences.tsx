import { useEffect } from "react"
import "../assets/Types"
import Experience from "./Experience.tsx"

export default function Experiences({person} : {person : person}){

    useEffect(() => {
        console.log(person.experiences)
    },[])
    return (
        <div>
            {person.experiences.map((experience, index) => (
                <Experience key={"experience" + index} experience={experience}></Experience>
            ))}
        </div>
    )
}