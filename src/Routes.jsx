import React from "react";

import {Routes, Route} from 'react-router-dom'

import Home from './views/Home'
import Technology from './views/Technology'
import Crew from './views/Crew'
import Destination from './views/Destination'


function RoutesDisplay(props){
    return(
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Destination' element={<Destination/>}></Route>
        <Route exact path='/Crew' element={<Crew/>}></Route>
        <Route exact path='/Technology' element={<Technology/>}></Route>
        <Route path='*' element={<Home/>}></Route>
    </Routes>
    )
}

export default RoutesDisplay