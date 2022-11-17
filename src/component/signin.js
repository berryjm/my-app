import React from "react";
import { GoogleButton } from "react-google-button"
import {UserAuth} from '../context/AuthContext'

function Signin () {  
    const {googleSignIn} = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        }
        catch (error) {
            console.log(error);
        }

    };

    return <>
    <div class="background">
        <div class="container">
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
    </div>
    </>;
}
export default Signin;