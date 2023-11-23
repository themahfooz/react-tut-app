import React,{Component} from "react";

class ClassComponent extends Component{
    constructor(){
        super();
        this.state={
            name : "Alam"
        }
    }

    render(){
        return(
            <div>
                <h1>Hello : {this.state.name}</h1>
            </div>
        );
    }
}

export default ClassComponent