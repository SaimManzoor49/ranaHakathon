import React, { createContext, useContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, fireStore, storage } from '../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, doc, Firestore, setDoc } from 'firebase/firestore';
const AuthContext = createContext();
export default function AuthcontextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userr, setUser] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user)
        setIsAuthenticated(true)
        // ...
      } else {
        // User is signed out
        setIsAuthenticated(false)
        // ...
      }
    });
  })


  const addEvents = async (title, location, date, time, cover, name, description) => {
    const imageREf = ref(
        storage,
        `uploads/images//${Date.now()}-${cover.name}`
    );
    const uploadedImg = await uploadBytes(imageREf, cover);


// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

    await setDoc(doc(fireStore, "Events"), {
        title,
        location,
        date,
        time,
        imageURL: uploadedImg.ref.fullPath,
        description,
        name,
        userID: userr.uid,
        userEmail: userr.email,
        displayName: userr.displayName,
        userPhotoURL: userr.photoURL,
    });
};


  return (
    <>

      <AuthContext.Provider value={{ addEvents, userr, isAuthenticated }}>

        {children}


      </AuthContext.Provider>



    </>
  )
}
export const useAuthContext = () => {

  return useContext(AuthContext)

}