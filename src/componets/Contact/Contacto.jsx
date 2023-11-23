import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Contacto.module.css";

export const Contacto = () => {
    return (
    <footer id="contact"  className={styles.container}>
    <div className={styles.text}>
        <h2>
         Click para CONTACTAME
        </h2>
        <p>
            Puedes encontrame por este medio o por mis redes Sociales
        </p>
        </div>
        <ul  className={styles.links}>
            <li  className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
                <a href="mailto:jesus123ut@gmail.com">jesus123ut@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
                <a href="https://www.facebook.com/profile.php?id=100004085829784">jesusSanchez</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="email" />
                <a href="mailto:jesus123ut@gmail.com">jesusSanchezR7</a>
            </li>
        </ul>

    </footer>
    )
}