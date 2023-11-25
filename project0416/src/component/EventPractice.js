import React, { useState } from "react";

const EventPractice =()=>{
    const[form,setForm]=useState({msg:"",username:""});
    
    //分割代入
    const{msg,username}=form;

    const handleChange=(e)=>{
        const nextForm={
            //スプレッド構文
            ...form,
            //name가 key로 사용됨
            [e.target.name]:e.target.value
        }
        setForm(nextForm);
    }

    const handleClick=()=>{
        alert(msg+""+username);
        setForm({msg:"",username:""})
        //JSON형식데이터 베이스에서 값을 받으면 JSON형식으로 받음 
    }
{/*선언을 받은 형식프로그래밍의 변수를 선언*/}
    return(
    <div>
        <h1>イベント練習</h1>
        <input type="text" name="message" 
        placeholder="뭐든 입력" 
        onChange={handleChange}
        
        value={msg}
        />
        <input type="text" name="username" 
        placeholder="이름"
        onChange={handleChange}
        value={username}
        />
        <button onClick={handleClick}>確認</button>
    </div>
    )
}
export default EventPractice;