import React, { Component } from 'react';

class ComponentDidMount extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Mahfooz"
        }

        console.warn("constructor");
    }

    componentDidMount(){
        console.warn("componentDidMount");
    }


    render(){
        console.warn("render");
        return(
            <div>
                <h2>Component Did Mount : {this.state.name}</h2>
                <button onClick={()=>this.setState({name :"Alam"})}>Update</button>
            </div>
        )
    }
}

export default ComponentDidMount