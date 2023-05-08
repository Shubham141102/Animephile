// import styles from "@/styles/Home.module.css";
import styles from "@/styles/RecentCard.module.scss"
import style from "@/styles/Home.module.css"
import React, { useRef, useEffect } from 'react';
export default  function Recentcard(props){

    function popup(){
        
    }
    const url = props.item.images.jpg.image_url
    const myStyle = {
        background: `url(${url}) no-repeat`,
    }
   
    

    return(
        // <div className={styles.recentcardbackground} id="back" >
        //     <div className={styles.recentcard} onClick={popup}>
                
        //         <div className={styles.cardblur}>
        //             <div className={styles.cardhead}>
        //                 <p className={styles.cardheader}>{props.item.title}</p>
        //                 <p className={styles.cardsubheader}>{props.item.mal_id}</p>
        //             </div>
        //             <div className={styles.cardplay}>
        //                 <div className={styles.playbutton}>
        //                     <img src="play.svg" alt="" style={{cursor : 'pointer'}} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className={styles.accordion}>
        //     <ul className={styles.accordionul}>
        //         <li className={styles.accordionli}>
        //             <div className={styles.image_title}>
        //                 <a className={styles.image_titlea}href="#">{props.item.title}</a>
        //             </div>
        //             <a href="https://ibb.co/gGv6QS"><img className={styles.accordionimg}src="https://image.ibb.co/k7P0kS/transformers4_640x320.jpg" alt="transformers4_640x320" border="0"></img></a>
        //         </li>
        //     </ul>
        // </div>

   
    <div className={style.recentcard}>
        <div className={styles.card}>
                {/* <div className={styles.card__img}>
                    <h1>hitesh</h1>
                </div> */}
            <div className={styles.card__inner} style={myStyle}>
                <main className={styles.card__body}>
                
                <div className={styles.card__info}>
                    <h1 className={styles.card__title}>{props.item.title}</h1>
                
                    <p className={styles.card__slug}>{props.item.synopsis.slice(0,200)}</p>
                
                    <a href={props.item.trailer.url}>
                        <button className={styles.card__btn} value="Watch trailer" >Watch trailer</button>
                    </a>

                    <div className={styles.card__rating}>
                        {props.item.score}
                    </div>
                </div>
                </main>
            </div>
        </div>
    </div>
    )
}