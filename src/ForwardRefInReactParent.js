import { useRef, useState } from "react"
import ForwardRefInReactChild from "./ForwardRefInReactChild";

function ForwardRefInReactParent(){

    let inputRef = useRef(null);

    function inputChange(){
        inputRef.current.value="654123";
        inputRef.current.style.color="blue"
    }

    return(
        <div>
            <h1>Forward Ref in React</h1>
            <ForwardRefInReactChild ref={inputRef}/>
            <button onClick={inputChange}>Update Ref</button>
        </div>
    )
}

export default ForwardRefInReactParent