import React from "react";
import Unity, { UnityContext } from "react-unity-webgl"
  
const unityContext = new UnityContext({
    loaderUrl: "build/2DPlatformer.loader.js",
    dataUrl: "build/2DPlatformer.data",
    frameworkUrl: "build/2DPlatformer.framework.js",
    codeUrl: "build/2DPlatformer.wasm"
});

function Nav () {  
    return <>
    <div class="background">
        <div class="container">
            <div id="unity">
            <Unity unityContext={unityContext} style={{ width: 800, height: 600 }}/>
            </div>
        </div>
    </div>
    </>;
}
export default Nav;