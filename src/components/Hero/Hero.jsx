import React from "react"
import styles from "./hero.module.css"


function Hero(){
   return  <section className={styles.container}>
    <div className={styles.Content}>
        <h1 className={styles.title}>Hi, I am Vidhan</h1>
        <p className={styles.discription}>I'm a full-stack developer</p>
        <a  className={styles.contactbtn} href="#Contact">Contact Me</a>
      
    </div>
    <img className={styles.profileimage} src="images/profile.png" alt="this is my avtar image" />
    <div  className={styles.topblur}/>
   
</section>

}
export default Hero;