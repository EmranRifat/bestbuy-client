import React from 'react';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        
        <div className='mx-4 mt-4 '>
           <div   className="carousel rounded-xl ">
  <div id="slide2" className="carousel-item relative w-full  ease-in-out">
    <img src={img1} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide1" className="carousel-item relative w-full  ease-in-out">
    <img src={img2} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  

 
</div> 
  </div>


//  <div className='ml-4 mt-4 rounded-xl'>
//   <Carousel autoPlay	infiniteLoop  onSwipeMove  width="96%"		>
// <div>
//     <img src={img1} alt='' />
//     <p className="legend">Legend 1</p>
// </div>
// <div>
//     <img src={img2}  alt=''/>
//     <p className="legend">Legend 2</p>
// </div>

// </Carousel> 
//  </div>

  





    );
};

export default Slider;