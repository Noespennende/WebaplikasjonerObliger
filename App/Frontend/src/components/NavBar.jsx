import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function NavBar(){

    return(
        <>
        <nav>
            <Link id="logo">
                <picture>
                    <source media="(min-width:300px)" srcSet={logo}/>
                    <img src={logo} alt="Andreas Berg portfolio"  width="120" height=""></img>
                </picture>
            </Link>
            <ul>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="#">Om meg</Link></li>
            </ul>
        </nav>
        </>
    )
}