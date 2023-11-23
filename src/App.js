//import {useState, useRef} from 'react';
import './App.css';
import React from "react";
// import Student from './Student';
// import GetInputBoxValue from './GetInputBoxValue';
// import HideAndShowElement from './HideAndShowElement';
// import BasicForm from './BasicForm'
// import Profile from './Profile'; 
// import Users from './User';
// import Members from './Members';
// import ClassComponent from './ClassComponent';
// import ComponentDidMount from './ComponentDidMount'
// import ComponentDidUpdate from './ComponentDidUpdate';
// import ShouldComponent from './ShouldComponent';
// import UseEffectInReact1 from './UseEffectInReact1';
// import UseEffectInReact2 from './UseEffectInReact2';
// import StyleInReact from './StyleInReact';
// import { Button, Alert  } from 'react-bootstrap';
// import ArrayInReact from './ArrayInReact';
// import ArrayInReactWithBootstrap from './ArrayInReactWithBootstrap';
// import NestedLoopInReact from './NestedLoopInReact';
// import ReUseComponentWithList from './ReUseComponentWithList';
// import FragmentInReact from './FragmentInReact';
// import User from './User';
// import MemoHookInReact from './MemoHookInReact';
// import UseRefInReact from './UseRefInReact'
// import ControlComponent from './ControlComponent'
// import UnControlComponent from './UnControlComponent';
// import HighOrderComponent from './HighOrderComponent';
//import RouterSetUp from './RouterSetUp';
// import Nav from './Nav';
// import PageNotFound from './PageNotFound';
// import DynamicRouting from './DynamicRouting';
// import GetApiCall from './GetApiCall';
// import PostApiCall from './PostApiCall';
// import DeleteApiCall from './DeleteApiCall';
// import PreFilledForm from './PreFilledForm';
// import PreviousStateInReact from './PreviousStateInReact';
// import PreviousStateProps from './PreviousStateProps';
import { CommonContext } from './components/CommonContext';
import Main from './components/Main';
import UpdateButton from './components/UpdateButton';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(){
    super();

    this.updateColors=(color)=>{
      this.setState({
        color:color
      })
    }


    this.state={
      color:"green",
      updateColors:this.updateColors
    }
  }

  

  // const[count, setCount] = useState(1);

  // function UpdateCount(){
  //   setCount(Math.floor(Math.random(count)*10));
  // }


  // const Users = [
  //   { name: "Mahfooz", email: "mahfooz@test.com", contact: "888888" },
  //   { name: "Ram", email: "ram@test.com", contact: "5555555" },
  //   { name: "Shayam", email: "shayam@test.com", contact: "3333333" },
  // ]


  // const[data, setData]=useState(null);
  // const[data, setData]=useState(100);
  // const[count, setCount]=useState(10);
  // const[print, setprint]=useState(false);


  // function getData(val){
  //   //setData(val.target.value);
  //   alert("Hello from App");
  // }

  // function parentAlert(data1){
  //   alert(data1)
  // }

  render(){
    return (
      <div className="App">
        {/* {
          print?
          <h1>{data}</h1>
          : null
        }
        <input type="text" onChange={getdata}/>
        <button onClick={()=>setprint(true)}>Print Data</button> 
        <GetInputBoxValue/>
        <HideAndShowElement/>
        <BasicForm/>
        <Profile/>
        <Users data={getData}/>
        <div>
          <Members data={getData}/>
        </div>
        <ClassComponent/>
        <ComponentDidMount/>
        <ComponentDidUpdate/>
        <ShouldComponent/>
        <UseEffectInReact1/>
        <UseEffectInReact2 data={data} count={count}/>
        <button onClick={()=>setData(data+1)}>Update Data</button>
        <button onClick={()=>setCount(count+1)}>Update Count</button>*/}
        {/* <h1>Install React-Bootstrap</h1>
        <Button onClick={()=>alert("Hello")}>Click Me</Button>
        <Alert  variant="info">
          This is a info alert—check it out!
        </Alert> */}
        {/* <ArrayInReact/> 
        <ArrayInReactWithBootstrap/>
        <NestedLoopInReact />*/}
        {/* {
          Users.map((item, i)=>
          <ReUseComponentWithList data={item}/>
          )
        } */}
  
  
        {/* <table>
          <tbody>
            <tr>
            <FragmentInReact/>
            </tr>
          </tbody>
        </table> */}
  
        {/* <User alert={parentAlert}/> 
         <MemoHookInReact/>
         <UseRefInReact/> 
         <ControlComponent/> 
         <UnControlComponent/> 
        <HighOrderComponent/>
        <RouterSetUp/>*/}
        {/* <Nav/> 
        <PageNotFound/>*/}
        {/* <DynamicRouting/> */}
        {/* <GetApiCall/> */}
        {/* <PostApiCall/> */}
        {/* <DeleteApiCall/> */}
        {/* <PreFilledForm/> */}
        {/* <PreviousStateInReact/> */}
        {/* <PreviousStateProps count={count}/>
        <button onClick={UpdateCount}>Update Count</button> */}
  
  
  
        <CommonContext.Provider value={this.state}>
          <Header/>
          <h1>Complete and easy example of context API</h1>
          <Main/>
          <UpdateButton/>
          <Footer/>
        </CommonContext.Provider>
  
  
  
      </div>
    );
  }
}

export default App;
