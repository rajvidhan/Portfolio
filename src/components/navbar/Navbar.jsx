import React, { useState } from "react";
import styles from "./navbar.module.css"
function Navbar() {

    const [menuopen, setmenuOpen] = useState(false);

    return <nav className={styles.navbar}>

        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menubtn} onClick={() => setmenuOpen(!menuopen)} src={
                menuopen ? "images/cross.png" : "images/menicon.png"
            }
            />

            <ul onClick={() => setmenuOpen(false)} className={`${styles.menuitems} ${menuopen && styles.menuopen}`}>
             
                <li><a href="#about">About</a></li>
                 <li> <a href="#experience">Experience</a></li>
                 <li> <a href="#projects">Projects</a></li>
                 <li> <a href="#Contact">Contact</a></li>
              
            </ul>

        </div>
    </nav>
}
export default Navbar;