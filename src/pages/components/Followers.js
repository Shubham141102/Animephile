import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, push, get,child } from "firebase/database";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Followers() {
    const router = useRouter();
    const [entireDb, setDB] = useState();
    const email = router.query;
    var listName = []
    console.log("email....follower..",email)
    useEffect(()=>{
        const firebaseConfig = {
            apiKey: "AIzaSyDehGE5mZ_mtlgTCjGopCMa8wzyx2aip6E",
            authDomain: "animephile-a28c7.firebaseapp.com",
            databaseURL: "https://animephile-a28c7-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "animephile-a28c7",
            storageBucket: "animephile-a28c7.appspot.com",
            messagingSenderId: "269230750335",
            appId: "1:269230750335:web:bd8b2a840d3d4305535d4a"
        };
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'users/')).then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setDB(data)
          }
        }).catch((error) => {
          console.error(error);
        });
    },[])
    console.log("entiredddddd",entireDb)
    for (const name in entireDb){
          for(const timestamp in entireDb[name]){
            for(const emails in entireDb[name][timestamp]){ 
              var mail = entireDb[name][timestamp].email  
              console.log("mail is ", mail)
              if(mail == email.email){
                console.log("name is ..is..is.",name)
                listName.push(name);
              }
            }
          }
      }
      const cards = listName.map((item) => {
        return (
            <h1>{item}</h1>
        )
      })
    return(
        <>
            <h1>Followers</h1>
            {cards}
        </>
    );
}