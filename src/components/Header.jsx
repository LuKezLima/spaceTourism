import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Header.css'


import Logo from '../assets/shared/logo.svg'

import menuHamburguer from '../assets/shared/icon-hamburger.svg'
import menuClose from '../assets/shared/icon-close.svg'

const initialActives = {
    Home:true,
    Destination:false,
    Crew:false,
    Technology:false
}

export default () => {

    const [{Home, Destination, Crew, Technology}, setActive] = useState(initialActives)

    const [Active, setactivemenu] = useState(true)

    const setActiveFunc = (pageNumber) =>{
        switch (pageNumber) {
            case 0:
                setActive({...initialActives})
                console.log(window.location.pathname)
                break;
            case 1:
                setActive({...initialActives, Home: false, Destination: true})
                console.log(window.location.pathname)
                break;
            case 2:
                setActive({...initialActives, Home: false, Crew: true})
                console.log(window.location.pathname)
                break;
            case 3:
                setActive({...initialActives, Home: false, Technology: true})
                console.log(window.location.pathname)
                break;
            default:
                break;
        }
    }

    let width = window.innerWidth
    useEffect( ()=> {
        
        if(width < 640) {
            setactivemenu(true)
        }
        if(width > 640) {
            setactivemenu(true)
        }

    }, [width])

   
   
    return(
        <header>

            <div className="logo">
                <img src={Logo}alt="Logo" />
            </div>

            <div className="menuMobile" onClick={e =>{
                setactivemenu(!Active)
            }} style={{
                backgroundImage: Active ? `url(${menuHamburguer})` :  `url(${menuClose})`
            }}>
                
                </div>
            
            <nav className={Active  ? 'active' : null}>
            
                <div className="traço"></div>

                <ul>
                    <li>
                    <Link onClick={e=>setActiveFunc(0)} style={{
                        borderBottom: Home && '2px solid rgba(255, 255, 255, 1)'
                    }} to='/' ><span>00 &nbsp;</span>Home</Link>
                    </li>
                    <li>
                    <Link  onClick={e=>setActiveFunc(1)} style={{
                        borderBottom: Destination && '2px solid rgba(255, 255, 255, 1)'
                    }} to='/Destination' ><span>01 &nbsp;</span>Destination</Link>     
                    </li>
                    <li>
                    <Link onClick={e=>setActiveFunc(2)} style={{
                        borderBottom: Crew && '2px solid rgba(255, 255, 255, 1)'
                    }} to='/Crew'><span>02 &nbsp;</span>Crew</Link>
                    </li>
                    <li>
                    <Link onClick={e=>setActiveFunc(3)} style={{
                        borderBottom: Technology && '2px solid rgba(255, 255, 255, 1)'
                    }} to='/Technology'><span>03 &nbsp;</span>Technology</Link> 
                    </li>
                             
                </ul>
            </nav>
        </header>
    )
}