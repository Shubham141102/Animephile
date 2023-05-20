import styles from "@/styles/Home.module.scss";
import Applogo from "./applogo";
import Search from "./Search";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar (props){

    function logoutme(){
        props.logout();
    }
    const router = useRouter()
    function handleClick(){
        const data = {
            email: props.email,
        };

        router.push(
            {
                pathname: '/followers',
                query:data,
            }
        );
    };

    console.log("navbar.....email....",props.email)
    return (
        <div className={styles.container}>
            <nav>
                <Applogo />
                <Search />
                <p className={styles.hiuser} >Welcome, {props.displayname}</p>
                <button className={styles.logoutbtn} onClick={logoutme}>LogOut</button>
                <Link href="/followers">
                    <button className={styles.logoutbtn} onClick={handleClick}>Followers</button>
                </Link>
                <img src={props.profileurl} className={styles.profile}></img>
            </nav>
        </div>
    );
}