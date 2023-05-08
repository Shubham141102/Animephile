import styles from "@/styles/Home.module.css";



export default  function Recentcard(props){

    function popup(){
        
    }



    return(
        <div className={styles.recentcardbackground} id="back" >
            <div className={styles.recentcard} onClick={popup}>
                
                <div className={styles.cardblur}>
                    <div className={styles.cardhead}>
                        <p className={styles.cardheader}>{props.item.title}</p>
                        <p className={styles.cardsubheader}>{props.item.mal_id}</p>
                    </div>
                    <div className={styles.cardplay}>
                        <div className={styles.playbutton}>
                            <img src="play.svg" alt="" style={{cursor : 'pointer'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}