import headerImage from "../assets/HarbNet.png"
import Line from "../assets/Line.png"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";

export default function ArticlePage(){

    return (
        <>
            <section id="articlePage">
                <picture>
                    <source media="(min-width:300px)" srcSet={headerImage}/>
                    <img src={headerImage} alt="En kaiplass med en seilbåt og en tråler"  width="700" height=""></img>
                </picture>
                <article id="articleContent">
                    <div id="articlePageHeaderAndTags">
                        <h1>HarbNet</h1>
                        <ul id="tags">
                            <li>C#</li>
                            <li>.Net</li>
                        </ul>
                    </div>
                    <picture id="line">
                        <source media="(min-width:300px)" srcSet={Line}/>
                        <img src={Line} alt=""  width="130" height=""></img>
                    </picture>

                    <Link to="#" id="repositoryButton"><FaGithub /> Visit repository</Link>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem ex, tincidunt nec mollis vitae, hendrerit ac nulla. Ut gravida ligula et erat cursus, vitae egestas est porttitor. Duis vitae laoreet arcu. Nullam enim mi, iaculis vitae neque sed, dapibus vestibulum nisi. Curabitur pharetra sit amet metus id varius. Suspendisse fermentum nec nulla non lobortis. Sed ac ultricies leo. Vestibulum imperdiet velit vitae sapien rhoncus, at fermentum turpis aliquet. Sed efficitur sollicitudin vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla euismod in leo vitae ullamcorper. Nam ut hendrerit orci. Donec in hendrerit dolor, ac sodales elit. Nulla euismod eros enim, ut imperdiet ipsum aliquet a. Nunc dictum ipsum non sollicitudin iaculis. Morbi non dolor eget urna dignissim vulputate vulputate eu orci.
                    </p>
                    <p>Donec in sapien fringilla, sagittis quam vel, porttitor diam. Vestibulum auctor rutrum lacinia. Morbi laoreet ex et velit gravida interdum. Sed sodales rhoncus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus congue nulla varius, ullamcorper justo sed, tincidunt arcu. Curabitur ullamcorper ante aliquet urna cursus gravida. Suspendisse potenti. Integer in neque id dolor rutrum laoreet non non enim. Donec ac tincidunt lacus, eget egestas nibh. Curabitur volutpat vitae felis sed ultrices. Etiam scelerisque dui quis risus ultricies suscipit. Aliquam bibendum condimentum mattis. Proin viverra lorem ut placerat iaculis. </p>
                </article>
            </section>
        </>
    )
}