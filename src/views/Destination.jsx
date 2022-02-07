import React from "react";
import './Destination.css'
import DestinationCard from "../components/DestinationCard";

export default () => {
    return(
        <div className="destination">
           
            <div className="bgBlack"></div>

            <div className="contentDestination">

            <h2><span>01</span> Pick your destination</h2>

            <DestinationCard/>

            </div>
        </div>
    )
}