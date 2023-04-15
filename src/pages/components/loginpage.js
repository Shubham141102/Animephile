import styles from "@/styles/Loginstyle.module.css";
import { useState } from 'react'
import Image from "next/image";
import arrowsvg from './assests/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg'
import { Megrim } from 'next/font/google'
const megrim = Megrim({ 
    weight: '400',
    subsets: ['latin'],
})
export default function Login(props){

  function func1(){
    props.loginfunc();

  }

  


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <span className={ megrim.className} id={styles.logoanime}>ANIMEPHILE</span>
                <p className={styles.card__content}>Get Reminders for Lates episodes releases.
                </p>
                <div className={styles.card__form}>
                    <button className={styles.signup} id="googlebtn" onClick={func1}> Login with Google <Image src={arrowsvg} alt="->" height={22}  color="white"/></button>
                </div>
            </div>
        </div>
    );
}