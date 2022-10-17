import React from "react";
import Unity, { UnityContext } from "react-unity-webgl"
  
const unityContext = new UnityContext({
    loaderUrl: "build/BGRMain.loader.js",
    dataUrl: "build/BGRMain.data",
    frameworkUrl: "build/BGRMain.framework.js",
    codeUrl: "build/BGRMain.wasm"
});

function Nav () {  
    return <>
    <div class="background">
        <div class="container">
            <div id="unity">
            <Unity unityContext={unityContext} style={{ width: 1080, height: 1080 }}/>
            </div>
        </div>
    </div>
    </>;
}
export default Nav;