import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Frontpage from './components/Frontpage'
import ArticlePage from './components/ArticlePage'
import CreateArticle from './components/createArticle'
import ContactPage from './components/ContactPage'
import "./assets/Types"

function App() {

  const andreas: person = {
    name: "Andreas Berg",
    degrees: ["Batchelor i Digital Medieproduksjon", "Batchelor i informatikk - design og utvikling av IT-systemer"],
    points: 360,
    email: "andrbe@hiof.no",
    experiences: [
      {role: "Filmfotograf/Motion designer", company: "Icecube Media"},
      {role: "Sommerpraktikant/Utvikler", company: "Kongsberg gruppen"}
    ]
  }

  return (
    <>
    <Layout>
      <Routes>
        <Route index element={<Frontpage person={andreas}/>}/>
        <Route path="/article/:slug" element={<ArticlePage/>}/>
        <Route path="/createarticle" element={<CreateArticle/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Layout>
  
    </>
  )
}

export default App
