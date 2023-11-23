import { useState } from "react"

function ControlComponent(){

    const [val, setVal] = useState("123")

    return(
        <div>
            <h1>Control Component</h1>
            <input type="text" onChange={(e)=>setVal(e.target.value)}/>
            <h3>Val: {val}</h3>
        </div>
    )
}

export default ControlComponent