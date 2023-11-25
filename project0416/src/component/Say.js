import React, { useState } from "react"

const Say=()=>{
    const[msg,setMsg]=useState("");//文字列なので、""
    const[name,setName]=useState("")

    const onClickEnter=()=>{
        setMsg("어서오세요");
    }
    const onClickLeave=()=>{
        setMsg("ㄱㅅ");
    }
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    return(
    <div>
        <input type="text" name="username" 
        placeholder="名前を入力してください。"
        value={name}
        onChange={handleChange}>
        </input>
        <button onClick={onClickEnter}>入場</button>
        <button onClick={onClickLeave}>退場</button>
        {name==="" || msg===""? null : (
        <h1>{""}
        {name}様、{msg}
        </h1>)}
    </div>
    )
}
export default Say;