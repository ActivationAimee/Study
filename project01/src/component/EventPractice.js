import React, {useState} from "react";
//user login作られる
const EventPractice = ()=>{
    const[form,setForm] = useState({username:"", password:""});
    const{username,password} = form;

    const onChange = (e) =>{
        const nextForm ={
            //kopi-したものはある
            ...form,
            [e.target.name]:e.target.value,
        };
        setForm(nextForm);
         
    };

        const onClick =()=>{
            alert("Welcome," + username);
            setForm({
                username:"",
                password:"",
            });
        };
        const onKeyPress=(e)=>{
            if (e.key === "Enter"){
                onClick();
            }
        };

//リファクタリング
return(
    <div>
     <h1>イベント</h1>
     <form>
     <input type="text" 
        name="username"  placeholder="ID"
        value={username}
        onChange={onChange}/>

     <input 
     type="password" 
     name="password"
      placeholder="Password"
      value={password}
      onChange={onChange}
      onKeyPress={onKeyPress}/>

          <button onClick={onClick}>kakuninn
          </button>
          </form>
    </div>
 ); 
};

export default EventPractice