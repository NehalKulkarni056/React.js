import React from "react";
import STYLE from "./nav3.module.css"

const Nav3=()=>{
    return(
        <div className={STYLE.nav3}>
            <div className={STYLE.menu}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Courses</a>
                </li>
                <li>
                    <a href="#">Gallery</a>
                </li>
            </ul>
            </div>

            <div className={STYLE.btn}>
                <button>Login</button>
                <button>Sign-Up</button>
            </div>
        </div>
    )
}

export default Nav3;