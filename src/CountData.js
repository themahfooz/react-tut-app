import React, {useState} from "react";
function CountData() {

    const [data, setdata]=useState(0);
    const [print, setprint]= useState();

    function updateState(){
        setdata(data+1);
        console.log(data);
    }

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
           <input type="text" onChange={getData}/>
           <button onClick={updateState}>Add</button>
        </div>
    )
}

export default CountData