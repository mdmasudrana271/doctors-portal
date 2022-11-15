import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithPopup, signOut, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState({})

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) =>{
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (googleProvider)=>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (userInfo)=>{
       return  updateProfile(auth.currentUser, userInfo)
    }

    const logOut = ()=>{
       return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=> {
            unsubscribe()
        }
    },[])

    const authInfo = {createUser, singIn, updateUser, user, setUser, googleLogin, logOut}
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;