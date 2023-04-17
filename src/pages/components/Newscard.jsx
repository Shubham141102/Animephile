import styles from "@/styles/Home.module.css"

export default  function Newscard(props){
    return(
        <>
        <div className={styles.newscard}>
        {/* <img src="./news.png" className={styles.newsback}></img> */}
            <h1>{props.item.title}</h1>
            <p>{props.item.description}</p>
        </div>
        </>
    )
}