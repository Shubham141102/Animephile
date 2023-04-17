import styles from "@/styles/Home.module.css"
import Newscard from "./Newscard"
import newsData from "./newsData"
export default  function News(){
    const cards = newsData.map(item => {
        return (
            <Newscard item={item}/>
        )
    })
    return(
        <>
        <h1 className={styles.sectionheading}>Buzz Today</h1>
        <div className={styles.newscontainer}>
           {cards}
        </div>
        </>
    )
}