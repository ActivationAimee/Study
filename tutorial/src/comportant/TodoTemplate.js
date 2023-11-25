import React from "react";
import Style from "./TodoTemplate.module.scss";

const TodoTemplate =({children})=>{
    return (

    <div className={Style.TodoTemplate}>
        <div className={Style.title}>TODO LIST</div>
        <div className={Style.content}>{children}</div>
    </div>

    );
};

export default TodoTemplate;