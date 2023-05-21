import AiringCard from "./AiringCard";
import database from "../utils/getFirebase";
import {ref, remove} from 'firebase/database'
export default function Following(props) {
    const DB = database();
    const db = database.db;
    const handleClick = (item) => {
        const dataRef = ref(db, '/uid'+uid);
        remove(dataRef).then(()=>{
            console.log("Entry removed")
        }).catch((err)=>{
            console.error('Error', err)
        })
        setState(item)
        console.log("name...is....",state,"item")
        console.log("handle item",item)
    }
      const cards = props.name.map((item) => {
        console.log("item is.....",item)
        return (
            // <AiringCard item={item}/>
            <>
                <li>{item}</li>
                <button onClick={()=>handleClick(item)}>Unfollow</button>
            </>
        )
      }) 
    return(
        <>
            <h1>Followers</h1>
            <ol>
            {cards}
            </ol>

        </>
    );
}