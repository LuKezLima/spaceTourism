import React from "react";
import './Crew.css'
import CrewCard from "../components/CrewCard";

export default () => {
    return(
        <div className="crew">
        
           
           <div className="bgBlack"></div>

           <div className="contentCrew">

           <h2><span>02</span> Meet your Crew</h2>

           <CrewCard/>

           </div>
        </div>
    )
}