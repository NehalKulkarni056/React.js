import React from 'react';

import "./global.css"
import Header from './Function_Based_Components/Arrow_Function/Header';
import Nav from './Function_Based_Components/Arrow_Function/Nav';
import Search from './Function_Based_Components/Arrow_Function/Search';
import List from './Function_Based_Components/Arrow_Function/List';
import Footer from './Function_Based_Components/Arrow_Function/Footer';

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