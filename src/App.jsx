import TodoItem from "./components/TodoItem";
import "./App.css";
import { useState, useRef,useMemo, useContext } from "react";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import { AppContext } from "./contexts/AppProvider";
function App() {
  const {categorySelectedId} = useContext(AppContext)
  const [searchText,setSearchText]=useState("");
  const [selectedFilterId, setSelectedFilterId] = useState("all");
  const [activeTodoItemId, setActiveTodoItemId] = useState()
  const [showSidebar, setShowSidebar] = useState(false)
  const inputTodo = useRef("");
  const [todoList, setTodoList] = useState([
    { id: "1", name: "Học toán", isImportance: false, isCompleted: false ,isDeleted:true,category:"personal"},
    { id: "2", name: "học vẽ", isImportance: true, isCompleted: false ,isDeleted:true,category:"company"},
    { id: "3", name: "chơi game", isImportance: false, isCompleted: true,isDeleted:false ,category:"idea"},
    { id: "4", name: "chơi đàn", isImportance: false, isCompleted: false ,isDeleted:true,category:"travel"},
  ]);
  const activedTodoItem=todoList.find((todo)=>todo.id===activeTodoItemId)
  console.log({activeTodoItemId})
  console.log({activedTodoItem})
  const handleIsCompleted = (id, value) => {
    // const i = todoList.findIndex((todo) => todo.id === id);
    
    // const newState=[...todoList];
    // newState[i].isCompleted=value;
    
    // setTodoList(newState);

    // setTodoList((todoList)=>{
    //   return todoList.map(todo=>todo.id===id?{...todo,isCompleted:value}:todo)
    // })
    // setTodoList((todoList)=>{
    //     const i=todoList.findIndex((todo)=>todo.id===id);
    //     const newState=[...todoList];
    //     if (i>=0){
          
    //       newState[i].isCompleted=value;
    //     }
    //   return newState;
    // })

  //   setTodoList((todoList)=>{
  //     const i=todoList.findIndex((todo)=>todo.id===id);
      
  //     if (i>=0){
        
  //       todoList[i].isCompleted=value;
  //     }
  //   return [...todoList];
  // })
    
  setTodoList((todoList) => {
    const i = todoList.findIndex((todo) => todo.id === id);
    const newState = [...todoList];
    if (i >= 0) {
      newState[i] = { ...newState[i], isCompleted: value };
    }
    return newState;
  })

  };
  const handleTodoItemClick=(id)=>{
    setShowSidebar(true);
    setActiveTodoItemId(id)
  }
  const handleUpdateTotoItem=(newTodoUpdate)=>{
    console.log({newTodoUpdate});
    setTodoList((preTodoList)=>preTodoList.map((todo)=>{
     return todo.id===newTodoUpdate.id?newTodoUpdate:todo
    }))
  }
  const filteredTodos =useMemo(()=>todoList.filter(todo=>{
    if (!todo.name.includes(searchText)) return false;
    if (categorySelectedId && categorySelectedId!==todo.category) return false;
    switch (selectedFilterId) {
      case "importance":
          return todo.isImportance;
      case "completed":
          return todo.isCompleted; 
      case "deleted":
        return todo.isDeleted;
      default:
        return true;
    }
  }),[selectedFilterId,todoList,searchText,categorySelectedId]) 
  

  
  
  const handleAddNewTask = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      // todoList.push({id:crypto.randomUUID(),name:value})
      const newTodo = { id: crypto.randomUUID()
        , name: value , isCompleted:false,isImportance:false,isDeleted:false,
      category:"idea"};
      setTodoList([...todoList, newTodo]);
      // console.log("enter ok:",todoList,inputTodo)
      console.log("inputTodo=", inputTodo.current.value);
      inputTodo.current.value = "";
    }
  };
  return (
    <>
      <div className="container">
        <FilterPanel selectedFilterId={selectedFilterId}  setSelectedFilterId={setSelectedFilterId} todoList={todoList}
        searchText={searchText} setSearchText={setSearchText}
        />
      <div className="main-container">
        <input
          ref={inputTodo}
          type="text"
          name="add-new-task"
          placeholder="thêm todo"
          className="task-input"
          onKeyDown={handleAddNewTask}
        />
        <div>{filteredTodos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        name={todo.name}
        isImportance={todo.isImportance}
        isCompleted={todo.isCompleted}
        handleOnChangeCheckBox={handleIsCompleted}
        handleTodoItemClick={handleTodoItemClick}
      />
    );
  })}</div>
        
         {showSidebar && <Sidebar key={activeTodoItemId} todoItem={activedTodoItem} handleUpdateTodo={handleUpdateTotoItem} setShowSidebar={setShowSidebar}/>}
        
      </div>
      </div>
    </>
  );
}

export default App;
