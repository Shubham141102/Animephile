import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, push, get,child } from "firebase/database";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Followers(props) {
    
      const cards = props.name.map((item) => {
        return (
            <h1>{item}</h1>
        )
      })
    return(
        <>
            <h1>Followers</h1>
            {cards}
        </>
    );
}