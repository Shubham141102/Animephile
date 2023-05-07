import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Recent from './components/Recent'
import News from './components/News'
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react'
import Login from './components/loginpage'
import { initializeApp } from 'firebase/app';

import { getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";







export default function Home() {
  const [islogedin, setLog] = useState(1);
  const [username, setname] = useState("User");
  const [prourl, seturl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");

  const firebaseConfig = {
    apiKey: "AIzaSyDehGE5mZ_mtlgTCjGopCMa8wzyx2aip6E",
    authDomain: "animephile-a28c7.firebaseapp.com",
    projectId: "animephile-a28c7",
    storageBucket: "animephile-a28c7.appspot.com",
    messagingSenderId: "269230750335",
    appId: "1:269230750335:web:bd8b2a840d3d4305535d4a"
  };

  var a = true;
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  var name = {};
  console.log(name);

  function logmein(){
    console.log("logging you in");
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
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

    }).catch((error) => {
    });

  }



  onAuthStateChanged(auth,user => {

    if (user) {
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

  return (
    <>
    {islogedin ?
      <>
        <Login loginfunc={logmein} />
      </>
     : 
      <>
        <Navbar logout={logmeout} displayname={username} profileurl={prourl}/>
        <Recent />
        <News/>
      </>
    }
    </>
  )
}






