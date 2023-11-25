import React, { Component, useState } from "react";

//Component
//class固まり
//Swift class : structure
//クラス系コンポーネント
//class UserComponent extends Component{

const UserComponent = () =>{

 //   constructor(props){
        //親クラスからもらったpropsを使います
//        super(props);

        //このコンポーネントで使われる(画面で変化する)値を宣言します。
//        this.state = {
//            number:0,
//            fixedNumber:0,
//           doubleNumber:1,
//        };
//    }
//userStateに0入れたらそれが初期値
const [number,setNumber] = useState(0);

//state={
 //number:0,
 //fixedNumber:0,
 //doubleNumber:1,    
//};
//    render(){
 //       const{number,fixedNumber,doubleNumber} = this.state;


        return(
            <div>
                <h1>{number}</h1>
                <button 
                onClick={()=>{
                     //this.setState(
                         setNumber(number+1);

                       }}
                    >
                    +1
                </button>
            </div>

        );
    };

export default UserComponent;