import { useEffect, useState } from "react";

function UseEffectInReact1() {

    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.warn("useEffect")
    })
    return(
        <div>
            <h1>Use Effect In React {count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
        </div>
    );
}
export default UseEffectInReact1