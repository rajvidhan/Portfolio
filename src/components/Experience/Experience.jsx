import React from "react";
import styles from "./exprience.module.css"
import skills from "../../data/skills.json" 
import history from "../../data/history.json" 

function Experience(){
    return <section className={styles.container} id="experience">
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
        {/* this div is create for add skills information */}
        <div className={styles.skills}>
            {
                skills.map((skill,id)=>{
                 return <div className={styles.skill}>
                    <div><img className={styles.imgcontainer} src={skill.imgsrc} alt={skill.title} /></div>
                    <p>{skill.title}</p>
                    </div>
                })
            }
        </div>
        {/* for experience we use a unordered list in this  */}
        <ul className={styles.history}>
             {
                history.map((history,id)=>{
                    
                     return  <li className={styles.historyitemsdetails}>
                          <h2>{history.role}</h2>
                          <p>{history.organisation}</p>
                    
                      </li>
                })
             }
        </ul>
    </div>
    </section>
}
export default Experience;