import React, { Component } from 'react';

class shouldComponent extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    shouldComponentUpdate(){
        console.warn("shouldComponentUpdate", this.state.count);
        if(this.state.count > 5 && this.state.count < 10){
            return true;
        }
    }


    render(){

        return(
            <div>
                <h2>Should Component Update : {this.state.count}</h2>
                <button onClick={()=>this.setState({count : this.state.count + 1})}>Update</button>
            </div>
        )
    }
}

export default shouldComponent