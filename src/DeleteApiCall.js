import { useEffect, useState } from "react"


function DeleteApiCall() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getList();
    }, [])

    function getList(){
        fetch("http://localhost:3004/posts").then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                setUsers(resp);
            })
        })
    }

    function deleteUsers(id) {
        //alert(id);
        fetch("http://localhost:3004/posts/" + id, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                getList();
            })
        })
    }




    return (
        <div>
            <h1>Delete Api Call</h1>

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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DeleteApiCall