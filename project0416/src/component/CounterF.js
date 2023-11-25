import React, { useState } from "react"

const CounterF =()=>{
    //16.8Hook
    const[number,setNumber]=useState(0);
    const[age,setAge]=useState(0);


    return(
    <div>
        <h1>{number}</h1>
        <h1>{age}</h1>

        <button onClick={()=>{
            setNumber(number+1);
            setAge(age-1);
            }}>+1</button>
    </div>
    )
}
export default CounterF;