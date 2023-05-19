import React from "react"
import { Title } from "../header/Title"
import { Card } from "../header/Card"
import { recommand } from "../data/data"



export const Recommended = () => {
    return (
      <>
        <section className='treading hero mt-7 pb-32'>
          <Title title='Recommand for you' />
          <div className='grid grid-cols-2 gap-5'>
           
            {recommand.map((item, i) => (
              <Card cover={item.cover} name={item.name} tag={item.tag} i={i} 
          />
              
            ))}
            
          </div>
        </section>
      </>
    )
  }