import {Table} from 'react-bootstrap';
function ArrayInReactWithBootstrap(){

    const users = [
        {name:"Mahfooz", email: "mahfooz@test.com", contact: "888888"},
        {name:"Ram", email: "ram@test.com", contact: "5555555"},
        {name:"Shayam", email: "shayam@test.com", contact: "3333333"},
    ]


    return(
        <div>
            <h1>Array Using React Bootstrap</h1>

            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <th>Serial No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                {
                    users.map((item, i)=>
                    // item.contact === "888888" ?
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                    </tr>
                    // : null
                    )
                }
                </tbody>
            </Table>
        </div>
    );
}
export default ArrayInReactWithBootstrap