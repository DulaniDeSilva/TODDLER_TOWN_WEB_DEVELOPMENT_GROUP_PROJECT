//homepage

import React from 'react';
import Homenavigation from '../Components/HomeComponents/Homenavigation';
import '../Assets/Styles/Home.css';
import Category from '../Components/HomeComponents/Category';
import FeaturesCard from '../Components/HomeComponents/FeaturesCard';


export default function Home() {
  return (
    <div>


        {/* Homenavigation component */}
        <Homenavigation/>
        <Category/>
        <FeaturesCard/>
        
    </div>
  )
}
