import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider()

  // Register
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider)
 }

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    logout,
    googleLogin,
    facebookLogin,
    githubLogin
  };
  // ---------------------------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email ; 
      const logedInuser = {email: userEmail};
      setUser(currentUser);
      console.log( 'current user' , currentUser);
      if (currentUser) {   
       
        axios.post( 'http://localhost:5000/jwt' ,logedInuser, {withCredentials: true})
        .then(res =>{
           console.log('token response' , res.data);
        })
      } else {
          axios.post('http://localhost:5000/logout' ,  logedInuser , {withCredentials: true})
          .then(res =>{
            console.log(res.data);
          })
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
 
  
  // --------------------------------------------------
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
