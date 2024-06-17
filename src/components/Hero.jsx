import React from 'react'

import daraz from "../images/Darazz.png"
import amazon from "../images/amazon.png"
import shoe from "../images/shoe_image.png"


function Hero() {
  return (
    <div className='flex justify-between w-4/5 mx-auto sm:p-10 p-2 mt-8 '  >

        <div   className='w-1/2' >

            <h1 className='sm:text-8xl text-3xl font-black '
            
            >YOUR FEET DESERVE THE BEST</h1>
            
            
            <p className='mt-8 sm:pr-48 pr-8 font-bold'
            
            >YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH YOUR VERY OWN BRAND NIKE. OUR SHOES ARE WORE, OWN AND USED ALL OVER THE WORLD.</p>

            <div className='mt-8 flex gap-10' >
                
                <button className='bg-red-500 text-white sm:text-lg text-sm font-bold px-2 py-1 hover:bg-sky-700'
                
                >Shop Now</button>
                
                <button className='text-gray font-bold border-2  sm:text-lg text-sm border-black px-2 py-1 hover:bg-gray-200'
                >Category</button>
            </div>


            <div className='mt-6' >
                <p>Also Available on:</p>

                <div className='flex mt-2 ' >
                    <img src={amazon}  className='h-10 ' alt="" />
                    <img src={daraz}  className='h-10 ' alt="" />
                </div>


            </div>

        </div>



        <div  className='w-1/2' >

            <img src={shoe}   className='sm:ml-10 ml-1 ' alt="" />

        </div>





    </div>
  )
}

export default Hero