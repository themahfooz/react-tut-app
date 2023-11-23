import { useState } from "react"

function PreviousStateInReact(){

    const[count, setCount] = useState(1);

    function getPreviousCount(){
        // let randomNumber = Math.floor(Math.random()*10)
        // setCount((previousNumber)=>{
        //     console.warn(previousNumber);
        //     if(previousNumber < 5){
        //         alert("Low Value")
        //     }
        //     return randomNumber;
        // });

        for(let i = 0; i < 5; i++){
            setCount((pre)=>{
                return pre+1
            })
        }
    }

    return(
        <div>
            <h1>Previous Count {count}</h1>
            <button onClick={getPreviousCount}>Click for Previous Count</button>
        </div>
    )
}

export default PreviousStateInReact