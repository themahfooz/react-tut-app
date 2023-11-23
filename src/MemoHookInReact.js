import React, { useState, useMemo } from "react";
function MemoHookInReact() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);

    const MultiCountMemo = useMemo(function MultiCountMemo() {
        console.log("MultiCountMemo");
        return count*5;
    },[count])

    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>Data : {data}</h1>
            <h1>{MultiCountMemo}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}

export default MemoHookInReact