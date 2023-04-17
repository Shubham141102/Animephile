import styles from "@/styles/Home.module.css"
import Recentcard from "./Recentcard"
import cardData from "./cardData"
export default  function Recent(){
    const cards = cardData.map(item => {
        return (
            <Recentcard item={item}/>
        )
    })
    return(
        <>
        <h1 className={styles.sectionheading}>Top trending</h1>
        <div className={styles.recentcontainer}>
           {cards}
        </div>
        </>
    )
}