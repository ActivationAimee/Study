import React, { useState } from "react";

const YourComponent = ()=>{
    const[msg, setMsg]=useState("");
    const[color,setColor] = useState("black");

    const onClickEnter = () => setMsg("いらっしゃいませ");
    const onClickLeave = () => setMsg("できません");
    


    return (
    <div>
        <button onClick={onClickEnter}>入</button>
        <button onClick={onClickLeave}>退</button>
        <h1 style={{color}}>{msg}</h1>
        <button style={{color:"red"}} onClick={()=>setColor("red")}>
            red</button>
       <button style={{color:"blue"}} onClick={()=>setColor("blue")}>
           blue</button>
        <button style={{color:"green"}} onClick={()=>setColor("green")}>
            green</button>
    </div>
    );
};

export default YourComponent;