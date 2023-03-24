import styles from "@/styles/Home.module.css"

export default  function Recentcard(){
    return(
        <div className={styles.recentcard}>
            
            <div className={styles.cardblur}>
                <div className={styles.cardhead}>
                    <p className={styles.cardheader}>Attack on Titan</p>
                    <p className={styles.cardsubheader}>S : 3.2, E : 1</p>
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