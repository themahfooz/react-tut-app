
function ArrayInReact(){

    // const student = ["ram", "shsyam", "nana", "papa"];

    // student.map((item)=>{
    //     console.warn(item);
    // })

    // for(let i = 0; i < student.length; i++){
    //     console.warn(student[i]);
    // }

    const student = [
        {name:"Mahfooz", email: "mahfooz@test.com", contact: "888888"},
        {name:"Ram", email: "ram@test.com", contact: "5555555"},
        {name:"Shayam", email: "shayam@test.com", contact: "3333333"},
    ]


    return(
        <div>
            <h1>Array Using React</h1>

            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>

            {
                student.map((key)=>
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.email}</td>
                        <td>{key.contact}</td>
                    </tr>
                )
            }
            </table>

        </div>
    );
}
export default ArrayInReact