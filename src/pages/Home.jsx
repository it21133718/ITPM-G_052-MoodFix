

import React from "react";
import { Hero, LayOutSidebar, Treading,New,Recommended} from "../router";


export const Home = () => {
    return (
        <>
        
        <Hero/>
        <LayOutSidebar>
        <Treading/>
        <New/>
        <Recommended/>
        </LayOutSidebar>
        </>

        
        
    )
}