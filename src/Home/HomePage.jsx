import React from "react";
import { Homes } from "../homes/Homes";
import { Upcoming } from "../Upcoming/Upcoming";
import { upcome,recommended } from "../data/dummyData";
import { Trending } from "../trending/Trending"





export const HomePages = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)

 return(
    <>
    <Homes/>
    <Upcoming items={items} title='Upcoming Movies' />


    <Trending />
   <Upcoming items={rec} title='Recommended Movies' />
  
    </>
  )
}