export default function ContactInfo ({email} : {email: string}) {
    return(
        <ul id="contactInformation">
            <li><span className="bold">e-post:</span> {email}</li>
            <li><span className="bold">Tlf:</span> 99 99 99 99</li>
        </ul>
    )
}