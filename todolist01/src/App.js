import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./component/TodoTemplate";
import { useCallback, useRef, useState } from "react";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import TodoListItem from "./component/TodoListItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "1", checked: false },
    { id: 2, text: "2", checked: true },
    { id: 3, text: "3", checked: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
      <TodoListItem />
    </TodoTemplate>
  );
}

export default App;
