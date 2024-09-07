import React, { useRef,useEffect } from "react";

export default function TodoItem({
  id,
  name,
  isImportance,
  isCompleted,
  handleOnChangeCheckBox,
  handleTodoItemClick
}) {
  // const isChecked = useRef(isCompleted);
  const handleClick = () => {
    // alert(name);
    console.log(name);
  };
  // useEffect(() => {
  //   isChecked.current.value=isCompleted
  
    
  // }, [isCompleted])
  
  return (
    <div className="todo-item" onClick={()=>handleTodoItemClick(id)}>
      <div style={{display:"flex",gap:"4px"}}>
        <input
          // ref={isChecked}
          type="checkbox"
          onClick={(e)=>e.stopPropagation()}
          checked={isCompleted}
          onChange={(e) => handleOnChangeCheckBox(id, e.target.checked)}
        />
        <p className="todo-item-text">{name}</p>
      </div>
      {isImportance && <p>Importance Window . 🐱‍🚀 ⭐🌟✨</p>}
    </div>
  );
}
