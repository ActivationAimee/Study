import React from "react";
import {
  RiCheckboxBlankLine,
  RiCheckboxIndeterminateLine,
} from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import Style from "./TodoListItem.module.scss";

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <div className={Style.TodoItemVirtualized} style={style}>
      <div className={Style.TodoItem}>
        <div
          className={checked ? Style.checkedbox : Style.checkbox}
          onClick={() => onToggle(id)}
        >
          {checked ? <RiCheckboxIndeterminateLine /> : <RiCheckboxBlankLine />}
          <div className={Style.text}>{text}</div>
        </div>
        <div className={Style.remove} onClick={() => onRemove(id)}>
          <BiTrash />
        </div>
      </div>
    </div>
  );
};
export default React.memo(TodoListItem);
