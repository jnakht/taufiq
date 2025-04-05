import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const str = 'jisan'
    // social or goole providers
    const googleProvider = new GoogleAuthProvider();
    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // sign in with email and password
    const passwordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo = {
        user,
        str,
        createUser,
        googleLogin,
        passwordLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;