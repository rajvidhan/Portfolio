import React from 'react'
import styles from "./contact.module.css"
const Contact = () => {
  return (
    <footer id='Contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
               <a href="mailto:vidhangour20@gmail.com"> <img className={styles.image} src="images/mail.jpg" alt="mail image" /></a>
                <a className={styles.linktxt} href="mailto:vidhangour20@gmail.com">E-mail</a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/vidhan-gour-207b9a233"><img className={styles.image} src="images/linkdin.png" alt="Linkdin image" /></a>
                <a className={styles.linktxt} href="https://www.linkedin.com/in/vidhan-gour-207b9a233">Linkdin</a>
            </li>
            <li className={styles.link}>
                <a href="https://github.com/rajvidhan"><img className={styles.image} src="images/git.png" alt="git image" /></a>
                <a className={styles.linktxt} href="https://github.com/rajvidhan">Git Hub</a>
            </li>
            <li className={styles.link}>
                <a href="https://instagram.com/gourvidhan_9_2?igshid=OGQ5ZDc2ODk2ZA=="><img className={styles.image} src="images/insta.jpg" alt="insta image" /></a>
                <a className={styles.linktxt} href="https://instagram.com/gourvidhan_9_2?igshid=OGQ5ZDc2ODk2ZA==">Intagram</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
