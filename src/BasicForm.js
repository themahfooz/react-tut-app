import { useState } from "react";

function BasicForm(){

    const [name, setname] = useState("");
    const [interest, setinterest] = useState("");
    const [tnc, settnc] = useState(false);

    function getFormData(e){
        console.log(name,interest,tnc)
        e.preventDefault()
    }

    return(
        <div>
            <h1>Handle form in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}/> <br/> <br/>

                <select onChange={(e)=>setinterest(e.target.value)}>
                    <option>select optios</option>
                    <option>Marvel</option>
                    <option>Superman</option>
                </select> <br/> <br/>

                <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}/> <span>Terms and Conditions</span> <br/> <br/>

                <button type="submit" >Submit</button>

            </form>
        </div>
    );
}

export default BasicForm