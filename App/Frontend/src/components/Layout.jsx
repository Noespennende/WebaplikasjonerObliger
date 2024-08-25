import NavBar from "./NavBar"

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

            </footer>
        </>
    )
}