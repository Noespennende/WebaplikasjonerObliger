import { useState } from "react"
import {contactMessage} from "../../../Types"
import ContactInfo from "./ContactInfo"


export default function ContactPage({email} : {email: string}){

    const [person, setPerson] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [message, setMessage] = useState("")
    const [formMessage, setFormMessage] = useState("")
    const [debugMessage, setDebugMessage] = useState()
    const [contactInfo, setContactInfo] = useState("")

     //HandleChange functions to handle form inputs
     const handlePersonChange = (e) => {
        e.preventDefault()
        setPerson(e.target.value)
    }
    const handleEmailChange = (e) => {
        e.preventDefault()
        setContactEmail(e.target.value)
    }
    const handleMessageChange = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }
    const handleSubmitt = (e) => {
        e.preventDefault()

        if(person.length < 3){
            setFormMessage("'Ditt navn' feltet må ha ett gylding navn")
        } else if (contactEmail.length < 3 || !contactEmail.includes("@")) {
            setFormMessage("Venligst fyll inn en gyldig epost-adresse i 'Din epost' feltet")
        } else if (formMessage.length < 3){
            setFormMessage("Venligst skriv hva henvendelsen gjelder i 'Din melding* feltet")
        } else {
            const contactMessageInfo: contactMessage = {
                person: person,
                email: contactEmail,
                message: message
            }

            setDebugMessage(JSON.stringify(contactMessageInfo))
        }
    }

    //Handle funksjoner for kontaktinfo
    const handleContactInfoRevealClick = (e) => {
        setContactInfo(<ContactInfo email={email}/>)
    }


    return (
        <section id="contactPage">
            <h1>Kontaktinfo</h1>
            <button type="button" onClick={handleContactInfoRevealClick}>Se kontakt informasjon</button>
            {contactInfo}
            
            <h2>Eller kontakt meg her:</h2>
            <form onSubmit={handleSubmitt} id="contactForm">
                <label htmlFor="contactPerson">Ditt navn</label>
                <input onChange={handlePersonChange} type="text" id="contactPerson" name="contactPerson" placeholder="Ola Normann..." required></input>
                <label htmlFor="contactEmail">Din epost</label>
                <input onChange={handleEmailChange} type="email" id="contactEmail" name="contactEmail" placeholder="eksempel@eksempel.no..." required></input>
                <label htmlFor="contactMessage">Din melding</label>
                <textarea onChange={handleMessageChange} type="text" id="contactMessage" name="contactMessage" placeholder="Skriv din beskjed her..." required></textarea>
                <button type="submit">Send melding</button>
                <p id="formmessage">{formMessage}</p>
            </form>
            <pre>
                {debugMessage}
            </pre>
        </section>
    )
}