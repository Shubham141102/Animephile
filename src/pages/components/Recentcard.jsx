import styles from "@/styles/RecentCard.module.scss"
import style from "@/styles/Home.module.css"
export default  function Recentcard(props){

    function popup(){
        
    }
    const url = props.item.images.jpg.image_url;
    const myStyle = {
        background: `url(${url}) no-repeat`
    }
    const tit = props.item.title;

    function followit(){
        props.savemyfollow(tit);
    }
   
    return(
        <div className={style.recentcard}>
            <div className={styles.card}>
                <div className={styles.card__inner} style={myStyle}>
                    <main className={styles.card__body}>
                        <div className={styles.card__info}>
                            <h1 className={styles.card__title}>{props.item.title}</h1>
                        
                            <p className={styles.card__slug}>{props.item.synopsis.slice(0,200)}...</p>
                        
                            <a href={props.item.trailer.url} target="_blank">
                                <button className={styles.card__btn} value="Watch trailer" >Watch trailer</button>
                            </a>
                            <button onClick={() => {followit()}} className={styles.card__btn2} value="follow" >Follow</button>
                            

                            <div className={styles.card__rating}>
                                Rating : {props.item.score}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}