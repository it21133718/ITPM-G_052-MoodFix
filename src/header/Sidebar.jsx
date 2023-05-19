import React from "react";
import { hero2 } from "../data/data";
import { Card } from "./Card";
import { AiFillApple } from "react-icons/ai"



export const Sidebar = () => {
    return (
        <>
            <section className='sidebar hero'>
                <h1 className='mb-5 text-lg font-semibold text-gray-600'>5 Likes</h1>
                {hero2.slice(0, 5).map((item,i) =>(
                    <div className="mb-3">
                        <Card cover={item.cover} name ={item.name} tag ={item.tag} i={i} />
                    </div>
                ))}

                <h1 className='mb-5 text-lg font-semibold text-gray-600 mt-5'>Go Mobile</h1>
                <div className='flex justify-between'>
          <div className='bg-secondary text-white flex center px-2 py-0.5 rounded-md'>
            <div className=''>
            <a href="https://www.apple.com/app-store/">
            <AiFillApple size={40} />
            </a>
            </div>
            <div className=''>
              <span className='text-gray-400 text-[15px]'>Download on the</span>
              <h1 className='text-md font-semibold'>App Store</h1>
            </div>
       </div>   
       
 </div>
 <p className='text-sm mt-3'>About Contact Legal Policy</p>
        <span className='text-gray-500 text-[12px]'>© Copyright 2022</span>
            </section>
        </>
    )
} 
