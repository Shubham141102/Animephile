import styles from "@/styles/Home.module.css";
 
export default function Navbar (props){

    function logoutme(){
        props.logout();
    }

    return (
        <div className={styles.container}>
            <nav>
                <img src="logo.png" className={styles.logo}></img>
                <input placeholder="Enter your Search" type='search' className={styles.search}/>
                <button className={styles.logoutbtn} onClick={logoutme}>LogOut</button>
                <p className={styles.logoutbtn} >{props.displayname}</p>
                <img src={props.profileurl} className={styles.profile}></img>
            </nav>
        </div>
    );
}