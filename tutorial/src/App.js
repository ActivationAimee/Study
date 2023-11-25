
import React, { useCallback, useRef,useState } from "react";
import TodoInsert from "./comportant/TodoInsert";
import TodoList from "./comportant/TodoList";
import TodoTemplate from "./comportant/TodoTemplate";
//import {Noh} from "./comportant/Noh";

function createBulkTodos(){
  const array =[];
  for(let i=1;i<=2500;i++){
    array.push({
      id:i,
      //grave accent
      text:`やること(${i})`,
      checked:false
    })
  }
  return array;
}


function App(){
  const [todos,setTodos]=useState(createBulkTodos);
  //setTodosを利用して新しい状態（state）をパラメータとして入力する
  //そのかわりにstateのアップをどうやって行うかを定義しているアップデート関数

  //useReducer



  const nextId = useRef(4);

  const onInsert=useCallback(
    (text)=>{
      if(!text) return;
      if(text.length >20){
        alert("20文字いかに入力してください");
        return;
      }
    const todo ={
      id:nextId.current,
      text,
      checked:false,
    };
  //functional update 
  //react-virtualized
    setTodos((todos)=>todos.concat(todo));
    nextId.current +=1;
    },[]);

  const onRemove = useCallback(id =>{
    setTodos((todos)=>todos.filter((todo)=> todo.id!==id));
  },[]);

  const onToggle=useCallback(
    (id)=>{
      setTodos((todos)=>todos.map((todo=>todo.id===id?{...todo,checked:!todo.checked}:todo)));
    },[]);

  return(
<div>
 <TodoTemplate>
   <TodoInsert onInsert={onInsert}/>
   {/*子供からもらうonRemove*/}
 <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
 </TodoTemplate>
</div>
  );
}
export default App;
