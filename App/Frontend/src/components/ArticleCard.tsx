import { Link } from "react-router-dom"
import Line from "../assets/Line.png"

export default function ArticleCard({header, tags, image, imageAlt, text, link} :
    {header: string, tags: string, image: string, imageCaption: string, text: string, link: string})
    {
    return (
        <>
        <Link to={link}>
            <article>
                <picture>
                    <source media="(min-width:300px)" srcSet={image}/>
                    <img src={image} alt={imageAlt}  width="" height=""></img>
                </picture>
                <h2>{header}</h2>
                <picture className="Line">
                    <source media="(min-width:300px)" srcSet={Line}/>
                    <img src={Line} alt=""  width="100" height=""></img>
                </picture>
                <ul>
                    <li>{tags}</li>
                </ul>
                <p>{text}</p>
            </article>
        </Link>
        </>
    )
}