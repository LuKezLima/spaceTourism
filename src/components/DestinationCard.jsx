import React, {useState} from "react"

import './DestinationCard.css'

import './DestinationMenu.css'



import imagemoon from '../assets/destination/image-moon.png'
import imagemars from '../assets/destination/image-mars.png'
import imageeuropa from '../assets/destination/image-europa.png'
import imagetitan from '../assets/destination/image-titan.png'

import json from '../data.json'

const initialStateDestination = {
    img: imagemoon,
    title: json.destinations[0].name,
    description: json.destinations[0].description,
    avgDistance: json.destinations[0].distance,
    travelTime: json.destinations[0].travel,
}

const initialActives = {
    bMoon:true,
    bMars:false,
    bEuropa:false,
    bTitan:false
}
export default () => {

   const [{bMoon, bMars, bEuropa, bTitan}, setB] = useState(initialActives) 
   const [{img, title, description, travelTime, avgDistance}, setState] = useState(initialStateDestination)


    const putDataDestination=(index, planet)=>{
        setState({
            img: index == 0 && imagemoon || index == 1 && imagemars || index == 2 && imageeuropa || index == 3 && imagetitan,
            title: json.destinations[index].name,
            description: json.destinations[index].description,
            avgDistance: json.destinations[index].distance,
            travelTime: json.destinations[index].travel})

        if(planet == 'Moon'){
            setB({...initialActives})
        }
        if(planet == 'Mars'){
            setB({...initialActives, bMoon: false, bMars: true})
        }
        if(planet == 'Europa'){
            setB({...initialActives, bMoon: false, bEuropa: true})
        }
        if(planet == 'Titan'){
            setB({...initialActives, bMoon: false, bTitan: true})
        }
        
    }

    return(
        <div className="DestinationCard">
            <div className="Destinationimage" style={{
                backgroundImage: `url(${img})`
            }}>
            </div>

            <div className="DestinationInfo">

                <nav className="DestinationMenu">
                    <ul>
                        <li onClick={e=> putDataDestination(0, 'Moon')} style={{
                            borderBottom: bMoon && '2px solid rgba(255, 255, 255, 1)'
                        }}>MOON</li>
                        <li onClick={e=> putDataDestination(1, 'Mars')}
                        style={{
                            borderBottom: bMars && '2px solid rgba(255, 255, 255, 1)'
                        }}>MARS</li>
                        <li onClick={e=> putDataDestination(2, 'Europa')}
                        style={{
                            borderBottom: bEuropa && '2px solid rgba(255, 255, 255, 1)'
                        }}>EUROPA</li>
                        <li onClick={e=> putDataDestination(3, 'Titan')}
                        style={{
                            borderBottom: bTitan && '2px solid rgba(255, 255, 255, 1)'
                        }}>TITAN</li>
                    </ul>
                 </nav>

                <h2>{title}</h2>
                <p>{description}</p>
                <hr />
                <div className="PlanetInfo">
                    <div className="Distance">
                        <p>AVG. DISTANCE</p>
                        <h3>{avgDistance}</h3>
                    </div>

                    <div className="TravelTime">
                    <p>EST. TRAVEL TIME</p>
                    <h3>{travelTime}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}