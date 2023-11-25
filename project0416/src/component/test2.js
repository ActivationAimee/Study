import React, { useState } from "react";

const Test2=()=>{
    const[number,setNumber]=useState(0);
    
    // const onClickEvent=()=>{
    //     if(setNumber %2===0){
    //         setNumber(number+3);
    //     }else{
    //         setNumber(number+1);
    //     }
    // }

    return(
        <div>
            {console.log(number)}
            {number%2===0 && number!==0 ? setNumber(number+3) : number}
            <h3>{number}</h3>
            <button onClick={()=>{setNumber(number+1)}}>+1</button>
            <button onClick={()=>{setNumber(number-1)}}>-1</button>

        </div>
    )
}
export default Test2;