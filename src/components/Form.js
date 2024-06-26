import React, { useRef } from "react";
 const Form=(props)=>{
    const inpRef = useRef();
    const handleClick=(e)=>{

        props.setInputValue(e.target.value);
    }

    const submitTodoHadler=(e)=>{
        e.preventDefault();
        if(props.inputValue==="") {
            return
        }
        props.setTodosValue([...props.todoValue,{text:props.inputValue,completed:false,id:Math.random()*1000}])
        inpRef.current.value = ""
        props.setInputValue("")
    }
   const handleStatus = (e)=>{
    props.setStatus(e.target.value);
   }
    return (
        <form>
        <input ref={inpRef} onChange={handleClick} type="text" className="todo-input" />
        <button onClick={submitTodoHadler}  className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}
export default Form;