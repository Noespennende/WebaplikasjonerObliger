import { FiSearch } from "react-icons/fi";

export default function SearchPortfolio(){

    return (
            <section>
            <input type="text" placeholder="Finn ett prosjekt..."></input>
            <button type="button"><FiSearch /></button>
            <div>

            <select name="category" id="category">
                <option value="all">Alle</option>
                <option value="fullstack">Fullstack</option>
                <option value="backend">Backend</option>
                <option value="motiongraphics">Motion Graphics</option>
            </select>
            </div>
        </section>
    )
}