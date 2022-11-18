import React from "react";
import Unity, { UnityContext } from "react-unity-webgl"
import { UserAuth } from '../context/AuthContext'
  
const unityContext = new UnityContext({
    loaderUrl: "build/BGRMain.loader.js",
    dataUrl: "build/BGRMain.data",
    frameworkUrl: "build/BGRMain.framework.js",
    codeUrl: "build/BGRMain.wasm"
});

function Nav () {  
    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        
        }
        catch(error) {
            console.log(error);
        }
    }

    return <>
    <div class="background">
        
        <div class="container">
        
            <div id="unity">
            <Unity unityContext={unityContext} style={{ width: 1080, height: 1080 }}/>
            </div>
            <div id="logout-button">
            <button onClick ={handleSignOut}>Sign Out</button>
            </div>
            <div id="welcome">
            <p>Welcome, {user?.displayName}</p>
            </div>
        </div>
       
    </div>
    </>;
}
export default Nav;