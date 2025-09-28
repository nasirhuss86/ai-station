import React, { use } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Community from './pages/Community'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import RemoveBackground from './pages/RemoveBackground'
import GenerateImages from './pages/GenerateImages'
import About from './pages/About'
import Author from './pages/Author'
import Helpcenter from './pages/Helpcenter'
import Testi from './pages/Testi'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'


const App = () => {

    const {getToken} = useAuth()
    useEffect(() => {
      getToken().then((token) => console.log(token));
    }, [getToken]);

  return (
    <div> 

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/author' element={<Author/>}/>
        <Route path='/helpcenter' element={<Helpcenter/>}/>
        <Route path='/testimonials' element={<Testi/>}/>

        <Route path='/ai'element={<Layout/>}> 
          <Route index element={<Dashboard/>}/>
          <Route path='write-article' element={<WriteArticle/>}/>
          <Route path='blog-titles' element={<BlogTitles/>}/>
          <Route path='generate-images' element={<GenerateImages/>}/>
          <Route path='remove-background' element={<RemoveBackground/>}/>
          <Route path='review-resume' element={<ReviewResume/>}/>
          <Route path='remove-object' element={<RemoveObject/>}/>
          <Route path='community' element={<Community/>}/>
        </Route>
      </Routes>
    
    </div>
  )
}

export default App

