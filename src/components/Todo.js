import React from "react";

const Todo = (props) =>{
    const handleDelete=()=>{
        props.setTodosValue(props.todoValue.filter(res=>res.id!==props.data.id));
    }

    const handleComplete=()=>{
        props.setTodosValue(props.todoValue.map(item=>{

            if(item.id === props.data.id){
                return {
                    ...item , completed:!item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
        <li className={`todo-item ${props.data.completed?"completed":""}`}>{props.data.text}</li>
        <button onClick={handleComplete} className="complete-btn">
            <i className="fas fa-check">
            </i>
        </button>
        <button onClick={handleDelete} className="trash-btn">
            <i className="fas fa-trash">
            </i>
        </button>

        </div>
    );
}

export default Todo;