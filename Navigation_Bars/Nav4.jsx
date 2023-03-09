import React from "react";
import STYLE from "./nav4.module.css"

const Nav4=()=>{
    return(
        <nav className={STYLE.nav4}>
		<span className={STYLE.name}>My Website</span>
		<span className={STYLE.menu}>
		<a href="#">Home</a>
		<a href="#">About</a>
		<a href="#">Contact</a>
		</span>
	</nav>
    )
}

export default Nav4;