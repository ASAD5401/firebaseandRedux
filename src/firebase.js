import { initializeApp, } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getMessaging, getToken, onMessage, } from "firebase/messaging";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPWLQup_jtzV4WxkGvKlY2i7HEERwZfRQ",
    authDomain: "learningcloudmessaging.firebaseapp.com",
    projectId: "learningcloudmessaging",
    storageBucket: "learningcloudmessaging.appspot.com",
    messagingSenderId: "451935961786",
    appId: "1:451935961786:web:07132445263c630ac97883",
    measurementId: "G-WG00K4SYJ6"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const getToken1 = async() => {
  try{
    const currentToken=await getToken(messaging, {vapidKey: 'BLc_OGfhDEQECkKCX2wXr0bfdyd_lFGk1Qz2mX6BF6L0Hrcuj10GG9gGqoJVPj1pfiyuZ6rs0xiaUTQJLGx2zFk'})
    return currentToken
  }
  catch(e)
  {
    console.log('An error occurred while retrieving token. ', e);
  }
 
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});