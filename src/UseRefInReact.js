import { useRef } from "react";

function UseRefInReact(){

    let inputRef = useRef(null);

    function InputHandle(){
        inputRef.current.value="1000";
        inputRef.current.focus();
        inputRef.current.style.color="red"
        //inputRef.current.style.display="none"
    }
    return(
        <div>
            <h1>Use Ref in React Js</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={InputHandle}>Update UseRef</button>
        </div>
    );

}

export default UseRefInReact