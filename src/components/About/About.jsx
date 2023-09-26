import React from "react"
import styles from "./about.module.css"
function About() {
    return <section className={styles.container}  id="about" >


        <h1 className={styles.title}>ABOUT</h1>
        <div className={styles.content}>
            <img className={styles.profileimg} src="images/study.png" alt="" />
            <ul className={styles.aboutitems}>
                <li className={styles.aboutitem}>
                    <img src="images/cursoricon.png" alt="" />
                    <div className={styles.aboutitemstext}>
                        <h3 >Frontend Developer</h3>
                        <p>I'm a front-end developer with experience
                            in building responsive sites.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutitem}>
                    <img src="images/cursoricon.png" alt="" />
                    <div className={styles.aboutitemstext}>
                    <h3 >Full-stack developer</h3>
                   <p>I'm a full-stack developer with experience
                    in building responsive sites.
                </p>
                    </div>
                </li>
            </ul>
        </div>

     
        </section>
}

export default About;