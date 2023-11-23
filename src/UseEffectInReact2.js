import { useEffect} from "react";

function UseEffectInReact2(props) {


    useEffect(()=>{
        console.warn("useEffect" + props.data)
    },[props.data, props.count])


    return(
        <div>
            <h1>Count Props {props.count}</h1>
            <h1>Data Props {props.data}</h1>
        </div>
    );
}
export default UseEffectInReact2