import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  height: "30px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        type="text"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
