import React, { Component } from 'react';

class ComponentDidUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }

        console.warn("constructor");
    }

    componentDidUpdate(prePreps,PreState,snapShot){
        console.warn("componentDidUpdate", PreState.count, this.state.count);
        if(this.state.count === PreState.count){
            alert("Previous Number Already Exist");
        }
    }


    render(){
       // console.warn("render");

        return(
            <div>
                <h2>Component Did Update : {this.state.count}</h2>
                <button onClick={()=>this.setState({count : 1})}>Update</button>
            </div>
        )
    }
}

export default ComponentDidUpdate