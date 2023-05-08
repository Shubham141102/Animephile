import styles from "@/styles/Home.module.css"
import Recentcard from "./Recentcard"
import React from "react";
import { useState, useEffect } from "react";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
const jikanjs = require('@mateoaranda/jikanjs');
export default function Recent(){


    useEffect(() => {
        getUser();
      }, [])


    var res = {}

    const [state, setState] =  useState([])
    const getUser = async () => {
        // const response = await jikanjs.loadAnime(31240, 'episodes', 15);
        const response = await fetch(`https://api.jikan.moe/v4/anime`).then(
            (res) => res.json()
          );
        // res = await response.json()
        setState(response.data);
    }
    const cards = state.map(item => {
        return (
            <Recentcard item={item}/>
        )
    })
        
        return(
            <>
            <h1 className={styles.sectionheading}>Top trending</h1>
            <div className={styles.recentcontainer}>
               {cards}
               {/* <Recentcard item={state}/> */}
            </div>
            </>
        )
    }