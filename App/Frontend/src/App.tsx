import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Frontpage from './components/Frontpage'
import ProjectPage from './components/ProjectPage'
import CreateProject from './components/CreateProject'
import ContactPage from './components/ContactPage'
import {person} from "../../Types"

function App() {

  const andreas: person = {
    name: "Andreas Berg",
    degrees: ["Batchelor i Digital Medieproduksjon", "Batchelor i informatikk - design og utvikling av IT-systemer"],
    points: 360,
    email: "andrbe@hiof.no",
    experiences: [
      {role: "Film-fotograf / Motion designer", company: "Icecube Media"},
      {role: "Sommerpraktikant / Utvikler", company: "Kongsberg gruppen"}
    ]
  }

  return (
    <>
    <Layout>
      <Routes>
        <Route index element={<Frontpage person={andreas}/>}/>
        <Route path="/project/:slug" element={<ProjectPage/>}/>
        <Route path="/createproject" element={<CreateProject/>}/>
        <Route path="/contact" element={<ContactPage email={andreas.email}/>}/>
      </Routes>
    </Layout>
  
    </>
  )
}

export default App
