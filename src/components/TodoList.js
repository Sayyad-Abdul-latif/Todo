import React from "react";
import Todo from "./Todo";

const Todolist=(props)=>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
        {
            props.todoValue.map(data=>{
                if(props.status === "uncompleted" && !data.completed){
               return <Todo setTodosValue = {props.setTodosValue} data = {data} key = {data.id} todoValue={props.todoValue}/>
                }
                if(props.status === "completed" && data.completed){
               return <Todo setTodosValue = {props.setTodosValue} data = {data} key = {data.id} todoValue={props.todoValue}/>
                }
                if(props.status == "all"){
                return <Todo setTodosValue = {props.setTodosValue} data = {data} key = {data.id} todoValue={props.todoValue}/>
                }
            })
        }
        </ul>
      </div>
    )
}

export default Todolist;