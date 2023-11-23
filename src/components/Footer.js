import { CommonContext } from "./CommonContext";

function Footer() {

    return (

        <CommonContext.Consumer>
            {
                ({color})=>(
                    <h1 className="footer" style={{backgroundColor:color}}>Footer page</h1>
                )
            }
        </CommonContext.Consumer>

    );
}

export default Footer;
