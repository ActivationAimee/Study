//아이템 항목
import React from "react";
import {RiCheckboxBlankLine, RiCheckboxIndeterminateLine } from "react-icons/ri";
import {BiTrash} from "react-icons/bi";
import Style from "./TodolistItem.module.scss";
import cn from"classnames";


const TodolistItem=({todo})=>{
    const{id, text, checked}= todo;
    
    return(
        <div className={Style.TodolistItem}>
            <div className={checked? Style.checked: Style.checkbox}>
            {checked? <RiCheckboxIndeterminateLine/>:<RiCheckboxBlankLine/>}
            <div className={Style.text}>{text}</div>
            </div>
            <div className={Style.remove}><BiTrash/></div>
        </div>
    )
}
export default TodolistItem;