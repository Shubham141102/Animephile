import styles from "@/styles/Home.module.css"

export default  function Newscard(props){
    const url = props.item.images.jpg.image_url
    const myStyle = {
        background: `url(${url}) no-repeat`,
    }
    return(
        <>
        <div className={styles.newscard} style={myStyle}>
            <h1>{props.item.title_english}</h1>
            <div>
                <p>{props.item.synopsis.slice(0,200)}</p>
            </div>
        </div>
        </>
    )
}