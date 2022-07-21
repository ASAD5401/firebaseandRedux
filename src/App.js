import logo from './logo.svg';
import './App.css';

import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getToken1, onMessageListener } from './firebase'

import { useEffect, useState } from 'react'
import { addToken } from './Database/FireStoreQueries';
const firebaseConfig = {
  apiKey: "AIzaSyCPWLQup_jtzV4WxkGvKlY2i7HEERwZfRQ",
  authDomain: "learningcloudmessaging.firebaseapp.com",
  projectId: "learningcloudmessaging",
  storageBucket: "learningcloudmessaging.appspot.com",
  messagingSenderId: "451935961786",
  appId: "1:451935961786:web:07132445263c630ac97883",
  measurementId: "G-WG00K4SYJ6"
};


function App() {
  const getData = async () => {
    const token = await getToken1()
    seta(token)
    addToken(token).then((res)=>{
      console.log(res)
    })
.catch((err)=>{
  console.log(err)
})
  }
  const [a, seta] = useState()

  // getToken(setTokenFound);
  useEffect(() => {

    getData()
  }, [])
  console.log(a)
  return (
    <>Asad Ali Khan
    </>
  );
}

export default App;
