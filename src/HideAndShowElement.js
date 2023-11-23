import { useState } from "react"

function HideAndShowElement(){

    const [status, setstatus] = useState(true);


    return(
        <div>
            {
                status?
                <h1>Hello</h1>
                : null
            }
            
            
            <button onClick={()=>setstatus(false)}>Hide</button>
            <button onClick={()=>setstatus(true)}>Show</button>
            <button onClick={()=>setstatus(!status)}>Toggle</button>
        </div>
    )
}

export default HideAndShowElement