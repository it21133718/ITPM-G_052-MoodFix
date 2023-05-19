import React, { useState } from "react"

import { homeData } from "../data/dummyData"
import {Home2} from "./Home2"
import "./home.css"



export const Homes = () => {
  const [items] = useState(homeData)

  return (
    <>
      <section className='home'>
        <Home2 items={items} />
      </section>
      <div className='mragin'></div>
    </>
  )
}

