import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button"
import {UserAuth} from '../context/AuthContext'
import {useNavigate} from "react-router-dom"

function Signin () {  
    const {googleSignIn} = UserAuth();
    const {user, logOut} = UserAuth(); // conditional rendering
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await logOut()
        }
        catch(error) {
            console.log(error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        }
        catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        if (user != null){
            navigate('/nav');
        }

    }, [user])

    return <>
    <div class="background">
        <div class="container">
            {user?.displayName ? <button onClick={handleSignOut}>Logout</button> : <GoogleButton onClick={handleGoogleSignIn} />}
        </div>
    </div>
    </>;
}
export default Signin;