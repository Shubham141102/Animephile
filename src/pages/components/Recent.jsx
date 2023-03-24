import styles from "@/styles/Home.module.css"
import { useState, useEffect } from 'react'


export default  function Recent(){
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        console.log('hohdsf')
      setLoading(true)
      fetch('https://gogoanime.consumet.stream/recent-release')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log(data);
        })
    }, []);
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return(
        <div className={styles.recent}>
           
        </div>
    )
}