import { useState } from 'react';
import './App.css';
import Addtodoform from './components/Addtodoform';
import Completedtodo from './components/Completedtodo';
import Counter from './components/Counter';
import Header from './components/layout/Header';
import Todos from './components/Todos';


function App() {


  const [todos, setTodos] = useState([])
 const [completedTodos, setCompletedTodos] = useState([]);
  const submithandler=(todoTitle)=> {
      const newTodos=[...todos];
      newTodos.push(todoTitle);
      setTodos(newTodos);
  }
  const RemoveTodo=(index)=> {
 const newtodos=[...todos];
 newtodos.splice(index,1);
 setTodos(newtodos);
  }

  const RemoveCompletedTodo=(index)=> {
    const newtodos=[...completedTodos];
    newtodos.splice(index,1);
    setCompletedTodos(newtodos);
     }

  const CompleteTaskHandler=(index,todo)=>{
    const newcompleted=[...completedTodos];
    newcompleted.push(todo);
    setCompletedTodos(newcompleted);
    RemoveTodo(index);

        }
        const ResetTodosList=()=> {
          setTodos([]);
          setCompletedTodos([]);
        }

  return (
    <>
    <Header/>
    <div className="container">
      <Completedtodo completedTodos={completedTodos} submithandler={submithandler} RemoveCompletedTodo={RemoveCompletedTodo}/>
      <Addtodoform submithandler={submithandler} todos={todos} completedTodos={completedTodos}/>
      <Todos todos={todos} RemoveTodo={RemoveTodo} CompleteTaskHandler={CompleteTaskHandler}/>
     {todos.length>0 && <button className="btn-clear-all" onClick={()=>{ResetTodosList()}}>Clear All</button>}
    </div>
    <Counter todos={todos}  completedTodos={completedTodos}/>
    </>
  );
}

export default App;
