import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>  HI, I'm J.Manuel</h1>
            <p className={styles.description}>
                I'm a Student</p>
            <a href="jesus123ut@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>

        <img src={getImageUrl("hero/heroImage1.png")} alt="Hero image of me" className={styles.heroImg}  />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
}