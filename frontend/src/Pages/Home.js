import React from 'react';
import Homenavigation from '../Components/HomeComponents/Homenavigation';
import '../Assets/Styles/Home.css';
import Category from '../Components/HomeComponents/Category';
import FeaturesCard from '../Components/HomeComponents/FeaturesCard';
import TeamComponent from '../Components/HomeComponents/TeamComponent';


export default function Home() {
  return (
    <div>


        {/* Homenavigation component */}
        <Homenavigation/>
        <Category/>
        <TeamComponent/>
        <FeaturesCard/>
        
    </div>
  )
}
