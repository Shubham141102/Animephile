import styles from "@/styles/Loginstyle.module.css";
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";
import { useState } from 'react'
import Image from "next/image";
import arrowsvg from './assests/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg'
export default function Login(props){


  const firebaseConfig = {
    apiKey: "AIzaSyDehGE5mZ_mtlgTCjGopCMa8wzyx2aip6E",
    authDomain: "animephile-a28c7.firebaseapp.com",
    projectId: "animephile-a28c7",
    storageBucket: "animephile-a28c7.appspot.com",
    messagingSenderId: "269230750335",
    appId: "1:269230750335:web:bd8b2a840d3d4305535d4a"
  };

  var a = true;
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  var name = {};
  console.log(name);

  function logmein(){
    console.log("logging you in");
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      name = user;
      console.log(user);
      props.logfunc(0);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  function logmeout(){
    signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Logged Out");
  props.logfunc(1);
}).catch((error) => {
  // An error happened.
});
  }


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <span className={styles.card__title}ss>ANIMEPHILE</span>
                <p className={styles.card__content}>Get Reminders for Lates episodes releases.
                </p>
                <div className={styles.card__form}>
                    <button className={styles.signup} id="googlebtn" onClick={logmein}> Login with Google <Image src={arrowsvg} alt="->" height={22}  color="white"/></button>
                </div>
            </div>
        </div>
    );
}