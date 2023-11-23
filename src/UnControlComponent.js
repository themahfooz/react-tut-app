import { useRef, useState } from "react"

function UnControlComponent() {
    // UnControl Component mean manipulate dom without State

    const inputData1 = useRef(null);
    const inputData2 = useRef(null);
    const val = useState(null);

    function submitForm(e) {
        e.preventDefault();
        console.warn("inputData1: ",  inputData1.current.value);
        console.warn("inputData2: ",  inputData2.current.value);
        console.warn("val: ",  document.getElementById("val").value);
    }

    return (
        <div>
            <h1>Control Component</h1>

            <form onSubmit={submitForm}>
                <input type="text" ref={inputData1} /> <br /> <br />
                <input type="text" ref={inputData2} /> <br /> <br />
                <input type="text" id="val" /> <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UnControlComponent