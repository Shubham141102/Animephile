import styles from "@/styles/Loginstyle.module.css";
import { useState } from 'react'
import Image from "next/image";
import arrowsvg from './assests/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg'
export default function Login(props){

  function func1(){
    props.loginfunc();

  }

  


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <span className={styles.card__title}ss>ANIMEPHILE</span>
                <p className={styles.card__content}>Get Reminders for Lates episodes releases.
                </p>
                <div className={styles.card__form}>
                    <button className={styles.signup} id="googlebtn" onClick={func1}> Login with Google <Image src={arrowsvg} alt="->" height={22}  color="white"/></button>
                </div>
            </div>
        </div>
    );
}