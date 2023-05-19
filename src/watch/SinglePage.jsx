
import { useParams } from "react-router";
import { homeData } from "../data/dummyData";
import React, { useState, useEffect } from "react";
import "./style.css"





export const SinglePage = () => {

    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id))
        if (item) {
          setItem(item)
        }
      }, [id])
      

    return (
    <>
    {item ?(

        <>
        <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className='container'>
              <video src={item.video} controls></video>
              </div>
             
              
            
            
            </section>
           
        </>

    ):null(
        "no"
    )}
    
    
    </>

    )
    

}
