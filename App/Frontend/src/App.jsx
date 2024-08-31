import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Frontpage from './components/Frontpage'
import ArticlePage from './components/ArticlePage'
import CreateArticle from './components/createArticle'

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route index element={<Frontpage/>}/>
        <Route path="/article/:slug" element={<ArticlePage/>}/>
        <Route path="/createarticle" element={<CreateArticle/>}/>
      </Routes>
    </Layout>
  
    </>
  )
}

export default App
