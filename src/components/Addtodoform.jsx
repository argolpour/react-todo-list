import { useState } from "react";
const Addtodoform = ({submithandler,todos,completedTodos}) => {
   
    const [todoTitle, setTodoTitle] = useState("");
    const [error, setError] = useState(null);
    const formHandler=()=>{
        const tasktitle=document.getElementById("taskinput");
        const isExistInTodos=todos.find(todo=>todo.trim()===todoTitle.trim());
        const isExistInCompletedTodos=completedTodos.find(todo=>todo.trim()===todoTitle.trim());

        if ((isExistInTodos)||(isExistInCompletedTodos)) {
            // alert("The Task Is Now Exist");
            setError("The Task is Now Exist");
            setTodoTitle("");
            setTimeout(() => {
                setError("");
               }, 3000);

        }else if ((tasktitle.value.trim()==="")) {
           // alert ("please enter a task");
           setError("Please Enter a Task");
           setTimeout(() => {
            setError("");
           }, 3000);

        }else {
             submithandler(todoTitle);
           setTodoTitle("");
        }
  
    }
    return (
        <>
        {(error) && (<h4 style={{color:"#ffffff",fontWeight:"bold" ,padding:"5px",backgroundColor:"#665959"}}><i style={{paddingRight:"5px"}} class="fas fa-bomb"></i>{error}</h4>)}
        <div className="form" >
              
            <input type="text" placeholder="Enter Task.."  id="taskinput" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} autoComplete="off"/>
            <i className="fas fa-plus-circle" id="addTaskbtn" onClick={()=>{formHandler(todoTitle)}}></i>
            
        </div>
        </>
    )
}

export default Addtodoform
