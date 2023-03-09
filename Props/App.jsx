import React from 'react';
import Welcome_function from './Props/Welcome_function';
import Welcome_class from './Props/Welcome_class';
import IMG from './Props/Holi.jpg';
import STYLE from "./Props/global.css"

let name=prompt("Enter your name...!")

const App = () => {
    return (
        <>
        <Welcome_function user={name}/>
        <br />
        <Welcome_class pic={IMG}/>
        </>
    );
}

export default App;