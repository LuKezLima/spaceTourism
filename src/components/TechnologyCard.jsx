import React, {useState} from "react"

import './TechnologyCard.css'
import json from '../data.json'

import photoLaunchVehicleP from '../assets/technology/image-launch-vehicle-portrait.jpg'
import photoSpaceCapsuleP from '../assets/technology/image-space-capsule-portrait.jpg'
import photoSpacePortP from '../assets/technology/image-spaceport-portrait.jpg'

import photoLaunchVehicleL from '../assets/technology/image-launch-vehicle-landscape.jpg'
import photoSpaceCapsuleL from '../assets/technology/image-space-capsule-landscape.jpg'
import photoSpacePortL from '../assets/technology/image-spaceport-landscape.jpg'



const initialState = {
    name: json.technology[0].name,
    description: json.technology[0].description,
    imgPortrait: photoLaunchVehicleP,
    imgLandscape: photoLaunchVehicleL,
}

const initialStateActive = {
    launchVehicle: true,
    spacePort: false,
    spaceCapsule: false
}

export default () => {

    const [{name, description, imgPortrait, imgLandscape}, setTech] = useState(initialState)
    const [{launchVehicle, spacePort, spaceCapsule}, setTechActive] = useState(initialStateActive)

    const setTechs = (index) => {
        if(index == 0){
            setTechActive(initialStateActive)
            setTech(initialState)
        }
        if(index == 1){
            setTechActive({launchVehicle: false, spacePort: true, spaceCapsule: false})
            setTech({name: json.technology[index].name,description: json.technology[index].description, imgPortrait: photoSpacePortP, imgLandscape: photoSpacePortL})
        }
        if(index == 2){
            setTech({name: json.technology[index].name,description: json.technology[index].description, imgPortrait: photoSpaceCapsuleP, imgLandscape: photoSpaceCapsuleL})
            setTechActive({launchVehicle: false, spacePort: false, spaceCapsule: true})
        }
    }


    const active = {
        backgroundColor: '#fff',
        color: '#000',
        transition: 'all .2s ease-in'
    }

    return(
        <div className="TechnologyGroup">
            <div className="menuTech">
                    <h5 className="menuTechItem" onClick={e=> setTechs(0)}
                    style={launchVehicle ? active : null}>1</h5>
                    <h5 className="menuTechItem" style={spacePort ? active : null} onClick={e=> setTechs(1)}>2</h5>
                    <h5 className="menuTechItem" style={spaceCapsule ? active : null} onClick={e=> setTechs(2)}>3</h5>
            </div>

            <div className="infoTech">
                <h4>THE TERMINOLOY...</h4>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>

                <picture>
                    <source media="(max-width: 850px)" srcSet={imgLandscape}></source>
                    <source media="(min-width: 851px)" srcSet={imgPortrait}></source>
                    <img src={photoLaunchVehicleL} alt="photoNave" />
                </picture>
                
           
        </div>
    )
}