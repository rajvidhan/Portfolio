import React from "react";
import styles from "./project.module.css"
import project from "../../data/project.json" 
function Project(){
    return <section id="projects" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                project.map((project,id)=>{
                    return <div className={styles.projectcard}>
                        <img  className={styles.image} src={project.imgsrc} alt={`image of ${project.title}`}/>
                        <h3 className={styles.title2}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>
                        <ul className={styles.skills}>
                            {
                                project.skills.map((skill,id)=>{
                                    return <li className={styles.skill} key = {id}>{skill}</li>
                                })
                            }
                        </ul>
                        <div className={styles.links}>
                            <a className={styles.link} href={project.source}>Demo</a>
                            
                        </div>
                    </div>
                })
            }
        </div>
    </section>
}
export default Project;