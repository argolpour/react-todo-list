const Todoitem = ({todo , index,RemoveTodo,CompleteTaskHandler}) => {
 const  CompletedControl=()=>{
     
        CompleteTaskHandler(index,todo);
       
    }
   
    return (
        <div className="todos-list-item">
            <div className="todos-list-item-content">
            <h3>{todo}</h3>
            </div>
            <i className="far fa-check-square" id="complete-check" onClick={()=>{CompletedControl()}}></i>
             <i className="far fa-trash-alt" onClick={()=>{RemoveTodo(index)}}></i>
                             
            </div>
    )
}

export default Todoitem
