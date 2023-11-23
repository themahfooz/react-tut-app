import { useState } from "react"

function GetInputBoxValue() {

    const[data, setdata]=useState(null);
    const[print, setprint]=useState(false);

    function getData(val){
        setdata(val.target.value);
    }
    return(
        <div>
            {
                print?
                <h1>{data}</h1>
                : null
            }
            <input type="textbox" onChange={getData}/>
            <button onClick={()=>setprint(true)}>Get Value</button>
        </div>
    )
}
export default GetInputBoxValue