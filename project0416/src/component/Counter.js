import React, { useState } from "react"

class Counter extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         number:0,//初期化する
    //     }
    // }

     state={
         number:0,
     };
    
    render(){
    //분할 대입,destructing
    const{number}=this.state
    //number=1+3;

        return<div>
            <h1>{this.state.number}</h1>
            <button onClick={()=>{this.setState({number:number+1})}}>+1</button>
            <button onClick={()=>{this.setState({number:number-1})}}>-1</button>
            <button onClick={()=>{this.setState({number:0})}}>初期化</button>

        </div>
    }
}

export default Counter