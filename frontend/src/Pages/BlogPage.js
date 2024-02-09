import React from 'react'
import TopBar from '../Components/BlogComponents/topbar/TopBar'
import Posts from '../Components/BlogComponents/posts/Posts'
import Sidebar from '../Components/BlogComponents/sidebar/Sidebar'
import '../Components/BlogComponents/sidebar/sidebar.css'
import Header from '../Components/BlogComponents/header/Header'
import Homenavigation from '../Components/HomeComponents/Homenavigation'
import Footer from '../Components/HomeComponents/Footer'

// import '../Assets/Styles/Home.css';



export default function BlogPage() {
  return (
    <div>
    <Homenavigation/>
    <TopBar/>
    <Header/>
    <div className='bloghome-maindiv'>
    <Posts/>
    <Sidebar/>
    </div>
    
    <Footer/>
    
    </div>
  )
}
