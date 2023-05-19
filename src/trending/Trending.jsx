import React from "react"
import "./trending.css"
import { Home2 } from "../router"


const Trending = () => {


    const [items, setItems] = useState(trending)
    return (
      <>
        <section className='trending'>
          <Home2 items={items} />
        </section>
      </>
    )
  }
  
  export default Trending
