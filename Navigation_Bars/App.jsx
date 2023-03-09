import React from "react";
import Nav1 from './Navigation_Bars/Nav1';
import Nav2 from './Navigation_Bars/Nav2';
import Nav3 from './Navigation_Bars/Nav3';
import Nav4 from './Navigation_Bars/Nav4';
import Nav5 from './Navigation_Bars/Nav5';
import STYLE from "./Navigation_Bars/app.module.css"


const App=()=>{
    return(
        <>
        <h1>Navigation Bars</h1>
        <h2>Nav Bar 1</h2>
        <Nav1/>
        <h2>Nav Bar 2</h2>
        <Nav2/>
        <h2>Nav Bar 3</h2>
        <Nav3/>
        <h2>Nav Bar 4</h2>
        <Nav4/>
        <h2>Nav Bar 5</h2>
        <Nav5/>
        </>
    )
}

export default App;