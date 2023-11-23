import { CommonContext } from "./CommonContext";

function Header() {

    return (

        <CommonContext.Consumer>
            {
                ({color})=>(
                    <h1 style={{backgroundColor:color}}>Header page</h1>
                )
            }
        </CommonContext.Consumer>

    );
}

export default Header;
