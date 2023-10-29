/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const Authcontext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUer => {
            setUser(currentUer);
            console.log('current user ', currentUer);
            setLoading(false)

        });

        return () => {

            return unSubscribe();

        }


    }, [])

    const authInfo = {


        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <Authcontext.Provider value={authInfo}>

            {children}

        </Authcontext.Provider>
    );
};

export default AuthProvider;