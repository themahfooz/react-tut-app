import { Table } from 'react-bootstrap';
function NestedLoopInReact() {

    const users = [
        {
            name: "Mahfooz", email: "mahfooz@test.com", Address: [
                { HNo: "10", city: "New Delhi", country: "India" },
                { HNo: "30", city: "Gudgaon", country: "India" },
                { HNo: "26", city: "Noida", country: "India" },
            ]
        },
        {
            name: "Ram", email: "ram@test.com", Address: [
                { HNo: "56", city: "New Delhi", country: "India" },
                { HNo: "54", city: "Gudgaon", country: "India" },
                { HNo: "24", city: "Noida", country: "India" },
            ]
        },
        {
            name: "Shayam", email: "shayam@test.com", Address: [
                { HNo: "79", city: "New Delhi", country: "India" },
                { HNo: "85", city: "Gudgaon", country: "India" },
                { HNo: "19", city: "Noida", country: "India" },
            ]
        },
    ]


    return (
        <div>
            <h1>Nested Loop Using React</h1>

            <Table variant='dark' striped bordered hover>
                <tbody>

                    <tr>
                        <th>SNo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>

                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table variant='dark' striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <th>HNo</th>
                                                <th>City</th>
                                                <th>Country</th>
                                            </tr>
                                            {
                                                item.Address.map((data, j) =>
                                                    <tr key={j}>
                                                        <td>{data.HNo}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.country}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    );
}
export default NestedLoopInReact