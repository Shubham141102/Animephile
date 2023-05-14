import styles from "@/styles/Home.module.css";
import Applogo from "./applogo";
import Search from "./Search";
export default function Navbar (props){

    function logoutme(){
        props.logout();
    }

    return (
        <div className={styles.container}>
            <nav>
                <Applogo />
                <Search />
                <p className={styles.hiuser} >Welcome, {props.displayname}</p>
                <button className={styles.logoutbtn} onClick={logoutme}>LogOut</button>
                <img src={props.profileurl} className={styles.profile}></img>
            </nav>
        </div>
    );
}