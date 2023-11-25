import React from "react";
import {
  RiCheckboxBlankLine,
  RiCheckboxIndeterminateLine,
} from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import Style from "./TodoListItem.module.scss";
//import cn from"classnames";

const TodoListItem = ({ todo, onRemove, onToggle, style, onEdit }) => {
  const { id, text, checked } = todo;
  return (
    <div className={Style.TodoListItemVirtualized} style={style}>
      <input className={Style.TodoListItem}>
        <div
          className={checked ? Style.checkedbox : Style.checkbox}
          onClick={() => onToggle(id)}
        >
          {checked ? <RiCheckboxIndeterminateLine /> : <RiCheckboxBlankLine />}

          <div className={Style.text}>{text}</div>
        </div>
        {/*親からもらったonRemoveをアロー関数*/}
        <div className={Style.remove} onClick={() => onRemove(id)}>
          <BiTrash />
        </div>
      </input>
    </div>
  );
};
export default React.memo(TodoListItem);
