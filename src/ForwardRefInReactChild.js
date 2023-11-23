import { forwardRef } from "react"
function ForwardRefInReactChild(props, ref){
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(ForwardRefInReactChild)