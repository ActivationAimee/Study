import React, { useEffect, useState } from "react";

const HookSample =()=>{
    const[name,setName]=useState("");
    const[nickname,setNickname]=useState("");

    useEffect(()=>{
        console.log("useEffect:マウント及びアップデートしました。");
        console.log({name,nickname});
        return()=>{
            console.log("useEffect(componentWillUnmount):ByeBye")
            //setName("");
            //setNickname("");
        };
    },[]);
    //[]이안에 아무것도 의존하지 않는다면,마운트 한뒤에 ComponentDidMount만 하고싶은경우
    //mount랑update는 죽을때까지 하는것useeffect랑 관계엑스
    //willunmount->하고 싶을때

    const onChangeName=(e)=>{
        setName(e.target.value);
    }

    const onChangeNickname=(e)=>{
        setNickname(e.target.value);
    }
    return(
        <div>
        {console.log("렌더 되었다")}
            
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>名前:{name}</div>
            <div>ニックネーム:{nickname}</div>

        </div>
    )
}

export default HookSample;