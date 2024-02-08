import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../Assets/Images/Home/background.jpg";
import img2 from "../../Assets/Images/Home/principle.jpg";
import img3 from "../../Assets/Images/Home/background.jpg";

function CarouselComponent() {
  return (

    <div className='carousel'>
        <Carousel>
            <Carousel.Item interval={5000}>
                 <img  src={img1} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                  <div className='carousel-content'>
                    <img  src={img2} alt = "logo" className='carouselimage-small'/>
                    <h3>There are many variations of passages of Lorem Ipsum available </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                  </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                 <img  src={img1} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                <div className='carousel-content'>
                    <img  src={img2} alt = "logo" className='carouselimage-small'/>
                    <h3>There are many variations of passages of Lorem Ipsum available </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={5000}>
                 <img  src={img1} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                <div className='carousel-content'>
                    <img  src={img2} alt = "logo" className='carouselimage-small'/>
                    <h3>There are many variations of passages of Lorem Ipsum available </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
        
        
    </div>
  )
};

export default CarouselComponent;
