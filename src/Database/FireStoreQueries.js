import {
    doc,
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    setDoc,
    updateDoc,
    getDoc,
    arrayUnion,
    arrayRemove
} from "firebase/firestore";
import { db } from '../firebase'

export const addToken = async (token) => {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, "Users", "one");
        const colRef = collection(docRef, "one") 

        const body={
            token:token
        }
        console.log(colRef)
        try {
            const addUser=await setDoc(doc(db,'User',token),{body})
            // const addUser = await addDoc(collection(db, 'User'),  body);
            resolve()
        }
        catch (e) {
            reject(e)
        }

    })

}