import { useState } from "react"

function PostApiCall(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    function saveUsers(){
        console.warn(name, email,mobile);
        let data = {name,email,mobile};

        // fetch("url").then((result)=>{
        //     result.json().then((resp)=>{
        //         console.warn(resp);
        //     })
        // })

        fetch("https://mocki.io/v1/41c66f1b-d863-420d-a38d-16ac0d5e7287",{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp" ,resp);
            })
        })
    }


    return(
        <div>
            <h1>Post Api Call</h1>

            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>   <br/> <br/>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>   <br/> <br/>
            <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>   <br/> <br/>
            <button type="button" onClick={saveUsers}>Save New User</button>
        </div>
    )
}

export default PostApiCall