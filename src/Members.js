function Members(props)
{
    console.log(props);
    return(
        <div style={{backgroundColor:"#D3D3D3", margin:"10px"}}>
            <h1>Members Component</h1>
            <button onClick={props.data}>Call Data function</button>
        </div>
    )
}

export default Members