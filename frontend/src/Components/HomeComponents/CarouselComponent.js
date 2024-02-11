import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import girl2 from "../../Assets/Images/Home/girl2.jpg";
// import img2 from "../../Assets/Images/Home/principle.jpg";
import img3 from "../../Assets/Images/Home/girl_image.jpeg";
import gray from "../../Assets/Images/Home/ash.avif";
import white from "../../Assets/Images/Home/texture.avif";

function CarouselComponent() {
  return (

    <div className='carousel'>
        <Carousel>
            <Carousel.Item interval={5000}>
                 <img  src={gray} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                  <div className='carousel-content'>
                    <img  src={girl2} alt = "logo" className='carouselimage-small'/>
                    <h3>"Heartfelt thanks, truly appreciated." </h3>
                    <p>I'm deeply grateful to have someone like you contributing to my child's growth and emotional well-being. Thank you again for making me feel comfortable being away from my child while at work and for caring for [him/her] beyond my expectations while I'm away.</p>
                  </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                 <img  src={gray} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                <div className='carousel-content'>
                    <img  src={img3} alt = "logo" className='carouselimage-small'/>
                    <h3>"Thank you, much appreciated." </h3>
                    <p>I would like to express my sincere gratitude to you for preparing my child for a lifetime of success. You're the best early-childhood education teacher I've ever known!</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={5000}>
                 <img  src={white} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                <div className='carousel-content'>
                    {/* <img  src={img2} alt = "logo" className='carouselimage-small'/> */}
                    <p className='carousel-content-news'>New PreSchool Intake Now open. Apply Now</p>
                    <button className='carousel-content-news-button'>Register</button>
                    
                </div>
                </Carousel.Caption>
            </Carousel.Item>





        </Carousel>
        
        
    </div>
  )
};

export default CarouselComponent;
