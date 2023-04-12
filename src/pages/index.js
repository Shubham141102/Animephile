import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Recent from './components/Recent'
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react'
import Login from './components/loginpage'

export default function Home() {
  const [islogedin, setLog] = useState(1);


  return (
    <>
    {islogedin ?
      <>
        <Login logintoggle={islogedin} logfunc={setLog} />
      </>
     : 
      <>
        <Navbar/>
        <Recent />
      </>
    }
    </>
  )
}

