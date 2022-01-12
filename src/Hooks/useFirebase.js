import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
        const [user, setUser] = useState({});
        const auth = getAuth();

        // Sign In With Google:
        const signInUsingGoogle = () => {
                const googleProvider = new GoogleAuthProvider();

                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                setUser(result.user);
                        })
        }

        // Logout Function:
        const logOut = () => {
                signOut(auth)
                        .then(() => {

                        })
        }

        // Observe User State Change:
        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, user => {
                        if (user) {
                                setUser(user);
                        }
                        else {
                                setUser({});
                        }
                });
                return () => unsubscribe;
        }, []);

        return {
                user,
                signInUsingGoogle,
                logOut
        }
}

export default useFirebase;