import styles from "@/styles/Home.module.css"
export default function Navbar (){
    return (
        <div className={styles.container}>
            <nav>
                <img src="logo.png" className={styles.logo}></img>
                <input placeholder="Enter your Search" type='search' className={styles.search}/>
                <img src="profile.jpg" className={styles.profile}></img>
            </nav>
        </div>
    );
}