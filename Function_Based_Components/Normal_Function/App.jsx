import React from 'react';

import "./global.css"
import Header from './Function_Based_Components/Normal_Function/Header';
import Search from './Function_Based_Components/Normal_Function/Search';
import List from './Function_Based_Components/Normal_Function/List';
import Footer from './Function_Based_Components/Normal_Function/Footer';
import Nav from './Function_Based_Components/Normal_Function/Nav';

function App(){
    return(
        <>
        <Header/>
        <br />
        <Nav/>
        <br />
        <Search/>
        <br />
        <List/>
        <br />
        <Footer/>
        </>
    )
}

export default App;