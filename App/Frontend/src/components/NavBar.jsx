import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function NavBar(){

    return(
        <>
        <nav>
            <Link>
                <picture>
                    <source media="(min-width:300px)" srcSet={logo}/>
                    <img src={logo} alt="Andreas Berg portfolio"  width="" height=""></img>
                </picture>
            </Link>
            <ul>
                <li><Link to="#">Hjem</Link></li>
                <li><Link to="#">Om meg</Link></li>
            </ul>
        </nav>
        </>
    )
}