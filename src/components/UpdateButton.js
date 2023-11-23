
import React from "react";
import { CommonContext } from "./CommonContext";

function UpdateButton() {

    return (

        <CommonContext.Consumer>
            {
                ({updateColors})=>(
                    <div>
                        <button onClick={()=>updateColors("yellow")}>Update Yellow Color</button>
                        <button onClick={()=>updateColors("red")}>Update Red Color</button>
                        <button onClick={()=>updateColors("blue")}>Update Blue Color</button>
                    </div>
                )
            }
        </CommonContext.Consumer>

    );
}

export default UpdateButton;
