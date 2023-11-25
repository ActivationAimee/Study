import React, { useState, useCallback } from "react";
import { MdPlaylistAddCheck } from "react-icons/md";
import Style from "./TodoInsert.module.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      //親からもらったonInsert
      onInsert(value);
      setValue("");
      //화면 갱신이 안되게 끔 초기화 안돼게끔
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className={Style.TodoInsert} onSubmit={onSubmit}>
      <input placeholder="何をする？" onChange={onChange} value={value} />
      <button type="submit">
        <MdPlaylistAddCheck />
      </button>
    </form>
  );
};

export default TodoInsert;
