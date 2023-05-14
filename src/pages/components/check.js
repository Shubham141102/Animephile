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

  const d = new Date();
  let day = d.getDay();
  var days = "";
  let titlearray = [];
  
  function sendRequest(list){
    props.sendUpdate(list);
  }

  const getShedule = async () => {
    if(day === 0){
      days = 'sunday'
    }else if(day ===1 ){
      days === 'monday'
    }else if(day ===2 ){
      days === 'tuesday'
    }else if(day ===3 ){
      days === 'wednesday'
    }else if(day ===4 ){
      days === 'thursday'
    }else if(day ===5 ){
      days === 'friday'
    }else if(day ===6 ){
      days === 'saturday'
    }
    const response = await fetch(`https://api.jikan.moe/v4/schedules/${days}`).then(
          (res) => res.json()
        );
        setSchedule(response.data);
        console.log(response.data)
    for(let i in response.data){
      titlearray.push(response.data[i].title);
    }
    sendRequest(titlearray);
  }

  function func1(){
    getShedule();
  }

    return (
        <div className={styles.container}>
            <button onClick={func1}>Check Updates</button>
        </div>
    );
}