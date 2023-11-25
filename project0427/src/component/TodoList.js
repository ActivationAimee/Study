//보여지는 리스트들
import React from "react";
import Style from "./TodoList.module.scss";
import TodolistItem from "./TodolistItem";


const TodoList=({todos})=>{
    return(
        <div className={Style.TodoList}>
            {todos.map((todo)=>(
                <div>
                    <TodolistItem key={todo.id} todo={todo}/>
                </div>
            ))}
        </div>
    )
}
export default TodoList;