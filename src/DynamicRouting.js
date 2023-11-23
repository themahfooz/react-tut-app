import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Member from "./Member";


function DynamicRouting(){

    const members = [
        {id:"1", name:"Mahfooz", email:"mahfooz@test.com"},
        {id:"2", name:"Raju", email:"raju@test.com"},
        {id:"3", name:"Shayam", email:"shayam@test.com"},
        {id:"4", name:"Ram", email:"ram@test.com"},
        {id:"5", name:"Tony", email:"tony@test.com"}
    ]



    return(
        <div>
            <Router>
                
                <h1>React Dynamic Routing</h1>
            {
                members.map((item,i)=>
                <div key={i}>
                    <Link to={"/member/" + item.id + "/" + item.name}><h3>{item.name}</h3></Link>
                </div>
                )
            }
                <Routes>
                    <Route path="/member/:id/:name" element={<Member/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default DynamicRouting