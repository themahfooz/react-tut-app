import { useEffect, useRef } from "react"

function PreviousStateProps(Props){

    const lastval = useRef();

    useEffect(()=>{
        lastval.current=Props.count;
    })

    const previousval = lastval.current;

    return(
        <div>
            <h1>current val {Props.count}</h1>
            <h2>Previous val {previousval}</h2>
            <h3>Difference {Props.count - previousval}</h3>
        </div>
    )
}

export default PreviousStateProps