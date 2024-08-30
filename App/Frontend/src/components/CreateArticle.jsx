import { useEffect, useState } from 'react'
import { redirect } from 'react-router-dom'

export default function createArticle (){

    const [formMessage, setFormMessage] = useState("")
    const [articleData, setArticleData] = useState({})
    //States to store form information
    const [header, setHeader] = useState("")
    const [slug, setSlug] = useState("")
    const [summary, setSummary] = useState("")
    const [tags, setTags] = useState("")
    const [image, setImage] = useState("")
    const [imageAlt, setImageAlt] = useState("")
    const [repository, setRepository] = useState("")
    const [text, setText] = useState("")

    //HandleChange functions to handle form inputs
    const handleHeaderChange = (e) => {
        e.preventDefault()
        setHeader(e.target.value)
    }
    const handleSlugChange = (e) => {
        e.preventDefault()
        setSlug(e.target.value)
    }
    const handleSummaryChange = (e) => {
        e.preventDefault()
        setSummary(e.target.value)
    }
    const handleTagsChange = (e) => {
        e.preventDefault()
        setTags(e.target.value)
    }
    const handleImageChange = (e) => {
        e.preventDefault()
        setImage(e.target.value)
    }
    const handleImageAltChange = (e) => {
        e.preventDefault()
        setImageAlt(e.target.value)
    }
    const handleRepositoryChange = (e) => {
        e.preventDefault()
        setRepository(e.target.value)
    }
    const handleTextChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    //Handle form submitt
    const handleSubmitt = (e) => {
        e.preventDefault()
        if(header.length === 0){
            setFormMessage("Artikkelen trenger en overskrift!")
        }
        else if (slug.length === 0){
            setFormMessage("Artikkelen trenger en slug!")
        }
        else if (summary.length === 0){
            setFormMessage("Artikkelen trenger ett sammendrag!")
        }
        else if (tags.length === 0){
            setFormMessage("Artikkelen trenger noen tags!")
        }
        else if (image.length === 0){
            setFormMessage("Artikkelen trenger ett bilde!")
        }
        else if (imageAlt.length === 0){
            setFormMessage("Artikkelens bilde trenger en bildebeskrivelse!")
        }
        else if (repository.length === 0){
            setFormMessage("Artikkelen trenger en link til repositoriet!")
        }
        else if (slug.text === 0){
            setFormMessage("Artikkelen trenger en artikkeltekst!")
        } else {
            setFormMessage("Informasjonen er motatt!")
            setArticleData(
                {
                    header: header,
                    slug: slug,
                    summary: summary,
                    tags: tags,
                    image: image,
                    imagealt: imageAlt,
                    repository: repository,
                    article: text
                }
            )
        }   
    }

    useEffect( () => {
        console.log(articleData)
    },[articleData])

    return(
        <>
            <section id="createArticlePage">
                <h1>Opprett en ny artikkel</h1>

                <form>
                    <label htmlFor="createHeader">Overskrift</label>
                    <input onChange={handleHeaderChange} type="text" id="createHeader" name="createHeader" placeholder="Overskrift..." required></input>
                    <label htmlFor="createSlug">Slug</label>
                    <input onChange={handleSlugChange} type="text" id="createSlug" name="createSlug" placeholder="Slug..." required></input>
                    <label htmlFor="createSummary">Sammendrag</label>
                    <input onChange={handleSummaryChange} type="text" id="createSummary" name="createSummary" placeholder="Kort, men beskrivende tekst..." required></input>
                    <label htmlFor="createTags">Tags</label>
                    <input onChange={handleTagsChange} type="text" id="createTags" name="createTags" placeholder="Tags. F.eks: CSS HTML JS..." required></input>
                    <label htmlFor="createImage">Bildeadresse</label>
                    <input onChange={handleImageChange} type="url" id="createImage" name="createImage" placeholder="https://eksempeladresse.no..." required></input>
                    <label htmlFor="createImagealt">Bildebeskrivelse</label>
                    <input onChange={handleImageAltChange} type="text" id="createImagealt" name="createImagealt" placeholder="Beskrivelse av bilde..." required></input>
                    <label htmlFor="createRepository">Repository link</label>
                    <input onChange={handleRepositoryChange} type="url" id="createRepository" name="createRepository" placeholder="https://github.com/eksempel......" required></input>
                    <label htmlFor="createText">Artikkel</label>
                    <textarea onChange={handleTextChange} r type="text" id="createText" name="createText" placeholder="Artikkel tekst..." required></textarea>
                    <button onClick={handleSubmitt}>Opprett artikkel</button>
                    <p id="formmessage">{formMessage}</p>
                </form>
            </section>
        </>
    )
}