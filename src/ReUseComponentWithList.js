
function ReUseComponentWithList(props) {

    return (
        <div>
            {/* <h1>ReUse Component With List</h1> */}
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <span>{props.data.contact}</span>

        </div>
    );
}
export default ReUseComponentWithList