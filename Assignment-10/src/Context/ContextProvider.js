import { createContext } from "react";
import app from "../Auth/firebase.config";
import { getAuth, signInWithPopup } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const ContextProvider =({children})=> {
    // Google SignIn

    const googleAuthProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const userInfo = {googleAuthProvider}

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default ContextProvider;