import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/TodoList';

function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all")
  return (
    <div className="App">
    <header>
       <h1>My Todo List</h1>
    </header>
     <Form todoValue = {todos} 
     setTodosValue = {setTodos} 
     inputValue = {input} 
     setInputValue = {setInput}
      setStatus = {setStatus}
     />
     <Todolist todoValue = {todos} setTodosValue = {setTodos} status = {status}/>
    </div>
  );
}

export default App;
