function User(props)
{

    const data1 = "Mahfooz";

    console.log(props);
    return(
        <div style={{backgroundColor:"#CBC3E3", margin:"10px"}}>
            <h1>User Component</h1>
            <button onClick={()=>props.alert(data1)}>Call Data function</button>
        </div>
    )
}

export default User