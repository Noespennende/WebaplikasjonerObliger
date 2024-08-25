import { Link } from "react-router-dom"

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
                <p>{text}</p>
            </article>
        </Link>
        </>
    )
}