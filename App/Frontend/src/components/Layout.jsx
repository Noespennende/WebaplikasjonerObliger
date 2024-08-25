import NavBar from "./NavBar"
import Footer from "./Footer"

export default function Layout({children}){

    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}