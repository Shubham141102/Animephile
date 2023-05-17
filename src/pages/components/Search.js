import styles from "@/styles/Home.module.scss"
import { useState, useEffect } from "react";
import getSearch from "../api/getSearch";
import {fetchData} from "../utils/getData"
export default function Search() {
    const [param, setParam] = useState()
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
          try {
            const response = await fetchData();
            setData(response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        getData();
        console.log(data)
      }, []); 
    return (
        <>
            <input placeholder="Enter your Search" type='search' className={styles.search} onChange={(event) => {setParam(event.target.value)}}/>
        </>
    );
}