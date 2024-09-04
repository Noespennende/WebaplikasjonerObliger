import exp from "constants"
import "../assets/Types"

export default function Experience ({experience} : {experience: involvement}){
    
    return (
        <>
        <p>{experience.role} for {experience.company}</p>
        </>
    )
}