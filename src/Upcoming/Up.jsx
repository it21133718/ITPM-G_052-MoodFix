import React, { useState } from "react"
import { Upcoming } from "../Upcoming/Upcoming";
import { upcome } from "../data/dummyData";

export const  Up = () =>
{
    const [items] = useState(upcome)
    return (
        <>
        <section className='home'>
        <Upcoming items={items} />
        </section>
        </>
        
    )
}