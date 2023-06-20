import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const authContext=createContext();
const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(" ");
    const [loading, setLoading] = useState(true);


    // create user
    const createUser=(email,password)=>{
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password)
    }
    // login
    const signIn=(email,password)=>{
        setLoading(true);
      return  signInWithEmailAndPassword(auth,email,password)

    }
// signout
const logOut=()=>{
    setLoading(true);
   return signOut(auth)
}

const updateUser=(userInfo)=>{
   return updateProfile(user,userInfo);
}



 // 4. Google Signin
  const signInWithGoogle = () => {
    setLoading(true);
   return signInWithPopup(auth, googleProvider);

  };
//   Get the currently signed-in user







useEffect(()=>{
  const unsubcribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
        return ()=> unsubcribe();
    })
},[])






    const authInfo={createUser,signIn,logOut,updateUser, user,loading,setLoading,signInWithGoogle}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;