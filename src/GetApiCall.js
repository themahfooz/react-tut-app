import { useEffect, useState } from "react";

function GetApiCall(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://mocki.io/v1/41c66f1b-d863-420d-a38d-16ac0d5e7287").then((result)=>{
            result.json().then((resp)=>{
                //console.warn(resp);
                setData(resp);
            })
        })
    })


    return(
        <div className="App">
            <h1>Get Api Call</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>

                    {
                        data.map((item,i)=>
                        <tr key={i}>
                            <td>{item.userId}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetApiCall