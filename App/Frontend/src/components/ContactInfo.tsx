export default function ContactInfo ({email} : {email: string}) {
    return(
        <ul id="ContactInformation">
            <li>e-post: {email}</li>
            <li>Tlf: 99 99 99 99</li>
        </ul>
    )
}