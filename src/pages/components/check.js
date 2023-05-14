import styles from "@/styles/Checkbutton.module.css";
import Image from "next/image";
import arrowsvg from './assests/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg'
import { Megrim } from 'next/font/google'
import { useEffect,useState } from "react";

const megrim = Megrim({ 
    weight: '400',
    subsets: ['latin'],
})
export default function Check(props){
  const [schedule, setSchedule] =  useState([])
  const getTopAnime = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/schedules/sunday`).then(
          (res) => res.json()
        );
        setSchedule(response.data);
        console.log(response.data)
  }

  function func1(){
    getTopAnime();
  }

    return (
        <div className={styles.container}>
            <button onClick={func1}>Check Updates</button>
        </div>
    );
}