import { Link } from "react-router-dom"
import Line from "../assets/Line.png"

export default function ArticleCard({header, tags, image, imageAlt, text, link} :
    {header: string, tags: string, image: string, imageAlt: string, text: string, link: string})
    {
    return (
        <>
        <Link to={link} className="articleCard">
            <article>
                <picture>
                    <source media="(min-width:300px)" srcSet={image}/>
                    <img src={image} alt={imageAlt}  width="300" height=""></img>
                </picture>
                <div className="articleCardHeaderAndTags">
                    <h2>{header}</h2>
                    <ul>
                        <li>{tags}</li>
                    </ul>
                </div>
                <picture className="Line">
                    <source media="(min-width:300px)" srcSet={Line}/>
                    <img src={Line} alt=""  width="100" height=""></img>
                </picture>
                <p>{text}</p>
            </article>
        </Link>
        </>
    )
}