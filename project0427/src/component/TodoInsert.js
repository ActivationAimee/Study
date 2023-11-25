//추가 항목
import React, { useCallback, useState } from "react";
import Style from "./TodoInsert.module.scss";
import {MdPlaylistAdd} from "react-icons/md";

const TodoInsert=({onInsert})=>{
    const[value,setValue]=useState("");

    const onChange=useCallback((e)=>{
        setValue(e.target.value);
    },[]);

    const onSubmit=useCallback((e)=>{
        onInsert(value);
        setValue("");
        e.preventDefault();
    },[onInsert,value]);


    return(
        <form className={Style.TodoInsert} onSubmit={onSubmit}>
            <input placeholder="WTF Are U Doing?"value={value} onChange={onChange}/>
            <button type="submit">
                <MdPlaylistAdd/>
            </button>
        </form>
    );
};
export default TodoInsert;