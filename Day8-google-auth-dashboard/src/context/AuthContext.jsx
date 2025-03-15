import React, { createContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      console.error("Google Login Error", error);
      throw error; // Propagate the error to the caller
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error", error);
      throw error; // Propagate the error to the caller
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};