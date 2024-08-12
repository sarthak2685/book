import React, { useEffect, useState } from 'react'
// import list from "../assets/list.json"
import Cards from './Cards'
import axios from "axios"
import {Link} from "react-router-dom"
function Course() {
    const [book,setBook]=useState([]);
    useEffect(()=>{
      const getBook= async()=>{
        try{
          const res = await axios.get(`${window.location.origin}/book`);
          console.log(res.data);
          setBook(res.data);
        } catch(error){
          console.log(error);
        }
      }
      getBook();
    },[])
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl font-semibold md:text-4xl'>
                        Welcome to Our Learning Hub! <span className='text-pink-500'>Explore and Grow :)</span>
                    </h1>
                    <p className='mt-6 text-lg md:text-xl'>
                        Discover a diverse collection of books designed to inspire, educate, and entertain. Whether you're looking for the latest bestsellers, timeless classics, or niche genres, we've got something for everyone.
                    </p>
                    <p className='mt-4 text-md md:text-lg'>
                        From in-depth guides to casual reads, our collection caters to all interests and skill levels. Dive in and find your next great read today!
                    </p>
      <Link to="/">
      <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6'>Back</button>
      </Link>
    </div>
    <div className='grid mt-12 grid-cols-1 md:grid-cols-4'>
        {
            book.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
        }
    </div>
  </div>
  </>
  )
}

export default Course