import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css"

export const Abaut = () => {
    return (
       <section className={styles.container} id="about"> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("abaut/aboutImage.png")} 
        alt="Me laptop" 
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("abaut/cursorIcon.png")} alt="cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>FrontEnd Developer</h3>
                    <p>Soy desarrollado</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("abaut/serverIcon.png")} alt="Server icon"/>
                <div className={styles.aboutItemText}>
                    <h3>BackEnd Developer</h3>
                    <p>Experiencias</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("abaut/uiIcon.png")} alt="ui icon"/>
                <div className={styles.aboutItemText}>
                    <h3>UI Developer</h3>
                    <p>Agregar otra cosa aqui </p>
                </div>
            </li>
            
        </ul>
        </div>
       </section>
    )

}