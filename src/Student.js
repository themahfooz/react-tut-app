import React, { Component } from 'react';

class Student extends React.Component{
    render(){
        return(
            <div>
                <h2>Hii : {this.props.name}</h2>
            </div>
        )
    }
}

export default Student