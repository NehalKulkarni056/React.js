import React from "react";
import STYLE from "./nav2.module.css";

const Nav2=()=>{
    return(
        <div className={STYLE.nav2}>
            
        <div className={STYLE.logo}>
             <img src="https://cdn-icons-png.flaticon.com/512/3844/3844724.png" alt="Logo" /> 
        </div>
        
        <div className={STYLE.menu}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Log In</a>
                </li>
                <li>
                    <a href="#">Sign Up</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Nav2;