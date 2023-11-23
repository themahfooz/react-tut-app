import { useParams } from "react-router-dom"

function Member(props){
    
    return(
        <div>
            <h1>Member Component: {useParams().id}</h1>
            <h1>Hi This is: {useParams().name}</h1>
        </div>
    )
}

export default Member;