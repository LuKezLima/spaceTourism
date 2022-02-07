import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import RoutesDisplay from "./Routes";
const App = () => {
    return(
       <BrowserRouter>
       <div className="app">
            <Header/>
            <RoutesDisplay/>
       </div>
       </BrowserRouter>
    )
}

export default App;