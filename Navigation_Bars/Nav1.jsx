import React from "react";
import STYLE from "./nav1.module.css"

const Nav1=()=>{
    return(
        <div className={STYLE.nav1}>
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
    )
}

export default Nav1;