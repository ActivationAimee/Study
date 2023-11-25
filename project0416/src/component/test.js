import React, { useState } from "react"

const Test=()=>{
    const[text1,setText1]=useState("")
    const[text2,setText2]=useState("")
    const[text3,setText3]=useState("")


    const onChange=(e)=>{
        setText1(e.target.value)
    }
    const onChange1=(e)=>{
        setText2(e.target.value)
    }
    const onClick=()=>{
        setText1("");
        setText2("");
    }

    return(
        <div>
            <h1>{text1}</h1>
            <input type="text" placeholder="1入力" name="text1" onChange={onChange} value={text1}/>
            <input type="text" placeholder="2入力" name="text2" onChange={onChange1} value={text2}/>
            <h1>{text2}</h1>
            <input type="text" placeholder="3入力" name="test3" onChange={onChange} value={text3}/>
            <button onClick={onClick}>入力</button>
        </div>
    )
}
export default Test