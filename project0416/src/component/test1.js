import React, { useState } from "react";

const Test1=()=>{
    const[form,setForm]=useState({username:"",password:""})

    const{username,password}=form;
    const onChange=(e)=>{
        const nextForm={
            ...form,
            [e.target.name]:e.target.value,
        };
        setForm(nextForm);
    }
    const onClick=()=>{
        alert(username+""+password);
        if(password===""){
            alert("PW入力してください。");
        }
        if(username&&password){
            alert(username+"Welcome!");
        }
        setForm({username:"",password:""})
    }
    const onKeyPress=(e)=>{
        if(e.key==="Enter"){
            onClick();
        }
    }

    return(
        <div>
            <input type="text" placehorder="이름입력" name="username" onChange={onChange}/>
            <input type="text" placehorder="비밀번호입력" name="password"onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>입력!</button>
        </div>
    )
}
export default Test1;