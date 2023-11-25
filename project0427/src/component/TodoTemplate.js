//전체화면
import React from "react";
import Style from "./TodoTemplate.module.scss";

const TodoTemplate=({children})=>{
    return(
        <div className={Style.TodoTemplate}>
            <div className={Style.title}>개쩌는 리스트</div>
            <div className={Style.content}>{children}</div>
        </div>
    )
}
export default TodoTemplate;