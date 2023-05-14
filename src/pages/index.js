import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Recent from './components/Recent'
import News from './components/News';
import Check from './components/check';
import Airingtoday from './components/Airingtoday';
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react'
import Login from './components/loginpage'
import { initializeApp } from 'firebase/app';

import { getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, push, orderByKey, orderByValue,orderByChild,get,child } from "firebase/database";
import { usePathname } from 'next/navigation'







export default function Home() {
  const [islogedin, setLog] = useState(1);
  const [username, setname] = useState("User");
  const [prourl, seturl] = useState("./assests/defaultprofile.webp");
  const [stateRecent, setStateRecent] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  const [isimp, setisImp] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyDehGE5mZ_mtlgTCjGopCMa8wzyx2aip6E",
    authDomain: "animephile-a28c7.firebaseapp.com",
    databaseURL: "https://animephile-a28c7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "animephile-a28c7",
    storageBucket: "animephile-a28c7.appspot.com",
    messagingSenderId: "269230750335",
    appId: "1:269230750335:web:bd8b2a840d3d4305535d4a"
  };
  
  

  var a = true;
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getDatabase();
  var name = {};
  console.log(name);


  // ---------------AUTHENTICATION--------------
  function logmein(){
    console.log("logging you in");
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      if(user.email === 'pratham111ingole@gmail.com' || user.email === 'shubhamhippargi@gmail.com' || user.email === 'hiteshjaindh@gmail.com'){
        setisImp(true);
      }
      name = user;
      console.log("---------------------");
      console.log(name);
      setname(name.displayName);
      seturl(name.photoURL);
      console.log("---------------------");

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  function logmeout(){
    signOut(auth).then(() => {
      console.log(name);
      console.log("Logged Out");
      console.log(auth.user);
      setisImp(false)
    }).catch((error) => {
    });

  }

  onAuthStateChanged(auth,user => {

    if (user) {
      if(user.email === 'pratham111ingole@gmail.com' || user.email === 'shubhamhippargi@gmail.com' || user.email === 'hiteshjaindh@gmail.com'){
        setisImp(true);
      }
        // signed in
        console.log('user innn');
        setname(auth.currentUser.displayName);
        seturl(auth.currentUser.photoURL);
        setLog(0);
    } else {
        // not signed in
        console.log('user out');
        setLog(1);
    }
});


  // -------DATABASED FUNCTIONS ----------------------
  function writeUserData( email,title) {
    const db = getDatabase();
    set(ref(db, 'users/' + title), {
      email
    });
  }

  function appendData(email, title){
    const postListRef = ref(db, 'users/' + title);
    const newPostRef = push(postListRef);
    set(newPostRef, {
        "email" : email
    });
  }


  function searchData(email,title){

    const dbRef = ref(getDatabase());
    get(child(dbRef, 'users/'+title)).then((snapshot) => {
      if (snapshot.exists()) {
       
        const data = snapshot.val();
        for (const key in data){
          if(data.hasOwnProperty(key)){
            if(data[key].email === email){
              return false;
            }
          }
        }
          // console.log("data email adding ");
          appendData(auth.currentUser.email,title);
          return true;
      } else {
        // console.log("No data available and adding new data ");
        appendData(auth.currentUser.email,title);
        return true;
      }
    }).catch((error) => {
      console.error(error);
    });
  
  }

  function savemyfollow(title){
    if(searchData(auth.currentUser.email,title)){
      console.log("data added")
    }else{
      console.log("email already present")
    }
  }



function sendEmail(list,database){
  console.log(database)
  console.log(list);

  for(let a in list){
    for (const name in database){
      if(name === list[a]){
        for(const timestamp in database[name]){
          for(const emails in database[name][timestamp]){
            // console.log(database[name][timestamp].email);
            console.log("Sending emails on : ",database[name][timestamp].email," for : ",name)
          }
        }
        
      }
    }
  }




}

let entireDb ;
// ---------------CHECKING WHAT MATCHES WITH TODAY UPDATE--------------------
  function sendUpdate(list){
    let toSendUpdateList = [];

    const dbRef = ref(getDatabase());
    get(child(dbRef, 'users/')).then((snapshot) => {
      if (snapshot.exists()) {
       
        const data = snapshot.val();
        entireDb = data;
        for (const key in data){
          if(data.hasOwnProperty(key)){
            for(let a in list){
              if(list[a] === key){
                toSendUpdateList.push(key);
              }
            }
          }
        }
      }
      sendEmail(toSendUpdateList,entireDb)
    }).catch((error) => {
      console.error(error);
    });

    

  }




  return (
    <>
    {islogedin ?
      <>
        <Login loginfunc={logmein} />
      </>
     : 
      <>
        {
          isimp ?
          <>
            <Navbar logout={logmeout} displayname={username} profileurl={prourl}/>
            <Check sendUpdate={sendUpdate}/>
            <Recent savemyfollow={savemyfollow} />
            <Airingtoday savemyfollow={savemyfollow} />
            <News/>
          </>
          :
          <>
            <Navbar logout={logmeout} displayname={username} profileurl={prourl}/>
            <Recent savemyfollow={savemyfollow} />
            <Airingtoday savemyfollow={savemyfollow} />
            <News/>
          </>        
          }
        
      </>
    }
    </>
  )
}






