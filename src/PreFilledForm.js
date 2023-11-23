import { useEffect, useState } from "react"


function PreFilledForm() {

    const [users, setUsers] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [id, setId] = useState(null);

    useEffect(() => {
        getUseList();
    }, [])

    function getUseList() {
        // fetch("http://localhost:3004/posts").then((result) => {
        //     result.json().then((resp) => {
        //         console.warn(resp);
        //         setUsers(resp);
        //         setName(resp[0].name)
        //         setEmail(resp[0].email)
        //         setMobile(resp[0].mobile)
        //     })
        // })
    }

    function deleteUsers(id) {
        //alert(id);
        // fetch("http://localhost:3004/posts/" + id, {
        //     method: "DELETE"
        // }).then((result) => {
        //     result.json().then((resp) => {
        //         console.warn(resp);
        //         getUseList();
        //     })
        // })
    }

    function selectUsers(id) {
        //console.warn(users[id - 1])
        let item = users[id - 1]

        setName(item.name)
        setEmail(item.email)
        setMobile(item.mobile)
        setId(item.id)
    }

    function updateUser(){
        let item = {name,email,mobile,id}

        // fetch("http://localhost:3004/posts/" + id, {
        //     method: "PUT",
        //     headers:{
        //         "Accept":"application/json",
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(item)
        // }).then((result) => {
        //     result.json().then((resp) => {
        //         console.warn(resp);
        //         getUseList();
        //     })
        // })
    }




    return (
        <div>
            <h1>Pre Filled Form</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td><button onClick={() => deleteUsers(item.id)}>Delete</button></td>
                                <td><button onClick={() => selectUsers(item.id)}>Select</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>  <br /><br />
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>  <br /><br />
                <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>  <br /><br />
                <button onClick={updateUser}>Update User</button>
            </div>
        </div>
    )
}

export default PreFilledForm