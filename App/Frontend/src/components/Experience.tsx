import {involvement} from "../../../Types"


export default function Experience ({experience} : {experience: involvement}){
    
    return (
        <>
            <li>{experience.role} for {experience.company}</li>
        </>
    )
}