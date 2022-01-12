import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onClickComlete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickComlete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
