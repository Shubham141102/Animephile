import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push, get,child } from "firebase/database";
export default function database(){
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
    const db = getDatabase();
    return {app, auth, dbRef, db}
}