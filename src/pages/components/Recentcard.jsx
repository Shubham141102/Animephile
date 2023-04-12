import styles from "@/styles/Home.module.css"

export default  function Recentcard(props){
    return(
        <div className={styles.recentcard}>
            
            <div className={styles.cardblur}>
                <div className={styles.cardhead}>
                    <p className={styles.cardheader}>{props.item.title}</p>
                    <p className={styles.cardsubheader}>{props.item.episode}</p>
                </div>
                <div className={styles.cardplay}>
                    <div className={styles.playbutton}>
                        <img src="play.svg" alt="" style={{cursor : 'pointer'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}