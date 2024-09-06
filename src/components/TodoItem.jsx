import React, { useRef,useEffect } from "react";

export default function TodoItem({
  id,
  name,
  isImportance,
  isCompleted,
  handleOnChangeCheckBox,
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
    <div className="todo-item" onClick={handleClick}>
      <div style={{display:"flex",gap:"4px"}}>
        <input
          // ref={isChecked}
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => handleOnChangeCheckBox(id, e.target.checked)}
        />
        <p className="todo-item-text">{name}</p>
      </div>
      {isImportance && <p>Importance Window . 🐱‍🚀 ⭐🌟✨</p>}
    </div>
  );
}
