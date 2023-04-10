import styles from "@/styles/Home.module.css"
import { useState, useEffect } from 'react'


export default  function Recent(){
    // const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(false)
    // useEffect(() => {
    //   setLoading(true)
    //   fetch('https://random-data-api.com/api/v2/users?size=2&is_json=true')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data);
    //       setLoading(false);
          
    //       console.log(data[0].first_name);
    //     })
    // }, []);
  
    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No profile data</p>
  
    return(
        <div className={styles.recent}>
           <p>{}</p>
        </div>
    )
}