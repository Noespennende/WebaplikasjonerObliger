import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <>
            <ul>
                <li><Link to="#">LinkedIN</Link></li>
                <li><Link to="#">GitHub</Link></li>
                <li><Link to="#">Vimeo</Link></li>
            </ul>
        </>
    )
}