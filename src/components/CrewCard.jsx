import React, {useState} from "react";
import './CrewCard.css'

import photoDouglas from '../assets/crew/image-douglas-hurley.png';
import photoVictor from '../assets/crew/image-victor-glover.png';
import photoAnousheg from '../assets/crew/image-anousheh-ansari.png';
import photoMark from '../assets/crew/image-mark-shuttleworth.png';

import dataJson from '../data.json'

const initialState = {
  role: dataJson.crew[0].role,
  name: dataJson.crew[0].name,
  bio: dataJson.crew[0].bio,
  img: photoDouglas
}

const initialStateActive = {
 douglasActive: true,
 markActive: false,
 victorActive: false,
 anoushehActive: false
}

export default () => {

  const [{role, name, bio, img}, setCrew] = useState(initialState)
  const [{douglasActive, markActive, victorActive, anoushehActive}, setCrewActive] = useState(initialStateActive)

  const setCrewData = (index) => {
      setCrew({
        role: dataJson.crew[index].role,
        name: dataJson.crew[index].name,
        bio: dataJson.crew[index].bio,
        img: index == 0 && photoDouglas || index == 1 && photoMark || index == 2 && photoVictor || index == 3 && photoAnousheg
      })
      if(index == 0) {
        setCrewActive({...initialStateActive})
      }
      if(index == 1) {
        setCrewActive({...initialStateActive, douglasActive: false, markActive: true})
      }
      if(index == 2) {
        setCrewActive({...initialStateActive, douglasActive: false, victorActive: true})
      }
      if(index == 3) {
        setCrewActive({...initialStateActive, douglasActive: false, anoushehActive: true})
      }
  }



  return (
    <div className="crewCard">

      <div className="crewContent">
          <div className="crewInfo">
          <h3>{role}</h3>
          <h2>{name}</h2>
          </div>
          <p>{bio}</p>
          <div className="menuCrew">
              <div className="menuItemCrew" onClick={ e => setCrewData(0)} style={{
                    backgroundColor: douglasActive && '#fff'
              }}></div>
              <div className="menuItemCrew" onClick={ e => setCrewData(1)} style={{
                  backgroundColor: markActive && '#fff'
              }}></div>
              <div className="menuItemCrew" onClick={ e => setCrewData(2)} style={{
                  backgroundColor: victorActive && '#fff'
              }}></div>
              <div className="menuItemCrew" onClick={ e => setCrewData(3)} style={{
                  backgroundColor: anoushehActive && '#fff'
              }}></div>
          </div>
      </div>

      <div className="crewImage" >
          <img src={img} alt="" />
      </div>
    </div>
  )
  }