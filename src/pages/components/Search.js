import styles from "@/styles/Home.module.css"
import { useState, useEffect } from "react";
export default function Search() {

    
    // useEffect(() => {
    //     getSearch();
    //   }, [])

    const [state, setState] =  useState([])
    const [param, setParam] = useState()
    const getSearch = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/?letter=demon`).then(
            (res) => res.json()
          );
        setState(response.data);
    }
    const getUpdate = (para) => {
        setParam(para)
        // getSearch()
    }
    getSearch()
    console.log(param)
    console.log(state)
    return (
        <>
            <input placeholder="Enter your Search" type='search' className={styles.search} onChange={() => {getUpdate(event.target.value)}}/>
        </>
    );
}