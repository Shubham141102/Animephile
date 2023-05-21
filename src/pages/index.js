import Navbar from './components/Navbar'
import Recent from './components/Recent'
import News from './components/News';
import Check from './components/check';
import Airingtoday from './components/Airingtoday';
import { useState } from 'react'
import Login from './components/loginpage'
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import {ref, set, push, get,child } from "firebase/database";
import database from './utils/getFirebase';

export default function Home() {
  const [islogedin, setLog] = useState(1);
  const [username, setname] = useState("User");
  const [prourl, seturl] = useState("./assests/defaultprofile.webp");
  const [propemail, setEmail] = useState("htieshjain");
  const [uid, setUid] = useState()
  const [timestamp, setTimestamp] = useState()
  const [isimp, setisImp] = useState(false);

  
  var a = true;
  const provider = new GoogleAuthProvider();
  var name = {};
  console.log(name);
  const DB = database();
  const auth = DB.auth;
  const db = DB.db;
  const dbRef = DB.dbRef
  // ---------------AUTHENTICATION--------------
  function logmein(){
    console.log("logging you in");
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      if(user.email === 'pratham111ingole@gmail.com' || user.email === 'shubhamhippargi@gmail.com' || user.email === 'hiteshjainhd@gmail.com'){
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
      if(user.email === 'pratham111ingole@gmail.com' || user.email === 'shubhamhippargi@gmail.com' || user.email === 'hiteshjainhd@gmail.com'){
        setisImp(true);
      }
        // signed in
        console.log('user innn');
        setname(auth.currentUser.displayName);
        seturl(auth.currentUser.photoURL);
        setEmail(auth.currentUser.email);
        setUid(auth.currentUser.uid)
        setLog(0);
    } else {
        // not signed in
        console.log('user out');
        setLog(1);
      }
  });

  console.log("set in auth..", propemail)
  // -------DATABASED FUNCTIONS ----------------------

  function appendData(email, title){
    const postListRef = ref(db, 'users/' + title);
    const newPostRef = push(postListRef);
    set(newPostRef, {
        "email" : email
    });
  }
  function appendDataEmail(email, title){
    const postListRef = ref(db, 'uid/' + uid);
    const newPostRef = push(postListRef);
    set(newPostRef, {
        "title" : title
    });
  }

  function searchData(email,title){
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
    get(child(dbRef, 'uid/'+uid)).then((snapshot) => {
      if (snapshot.exists()) {
       
        const data = snapshot.val();
        for (const key in data){
          if(data.hasOwnProperty(key)){
            if(data[key].title === title){
              return false;
            }
          }
        }
          // console.log("data email adding ");
          appendDataEmail(auth.currentUser.email,title);
          return true;
      } else {
        // console.log("No data available and adding new data ");
        appendDataEmail(auth.currentUser.email,title);
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
  

  const sendEmailToUser = async (recipientEmail, subject) => {
    // event.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipientEmail, subject}),
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Error sending email');
    }
  };


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
            var email = database[name][timestamp].email         
            // Call the sendEmail function to send an email
            sendEmailToUser(email, name);  
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

// function getTimestamp()
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
            <Navbar logout={logmeout} displayname={username} profileurl={prourl} email={propemail}/>
            <Check sendUpdate={sendUpdate}/>
            <Recent savemyfollow={savemyfollow} />
            <Airingtoday savemyfollow={savemyfollow} />
            <News/>
          </>
          :
          <>
            <Navbar logout={logmeout} displayname={username} profileurl={prourl} uid={uid}/>
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






