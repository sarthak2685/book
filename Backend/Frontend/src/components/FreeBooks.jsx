import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../assets/list.json"
import Cards from './Cards';
import axios from 'axios';

function FreeBooks() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook= async()=>{
      try{
        const res = await axios.get(`${window.location.origin}/book`);
       
        setBook(res.data.filter((data)=> data.category==="free"));
         console.log(res.data);
      } catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
    // const filterdata = list.filter((data)=> data.category==="free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ullam laborum nisi ipsam cum quidem, atque numquam explicabo voluptates minus a labore temporibus voluptatum? Illum deleniti eaque nulla maiores sequi.</p>
        </div>
       
    
    <div className="slider-container">
      <Slider {...settings}>
        {book.map((item) => (
                <Cards item={item} key={item.id} />
            ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBooks