import styles from "@/styles/Home.module.css";
import Applogo from "./applogo";
export default function Navbar (props){

    function logoutme(){
        props.logout();
    }

    return (
        <div className={styles.container}>
            <nav>
                <Applogo />
                {/* <img src="logo.png" className={styles.logo}></img> */}
                <input placeholder="Enter your Search" type='search' className={styles.search}/>
                <p className={styles.hiuser} >Welcome, {props.displayname}</p>
                <button className={styles.logoutbtn} onClick={logoutme}>LogOut</button>
                <img src={props.profileurl} className={styles.profile}></img>
            </nav>
        </div>
    );
}