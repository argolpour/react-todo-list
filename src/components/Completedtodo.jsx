const Completedtodo = ({completedTodos,submithandler,RemoveCompletedTodo}) => {
    const UndoCompletedTodo=(item,index)=>{
        submithandler(item);
        RemoveCompletedTodo(index);
    }
    return (
        
        <div className="completedTodos">
         {(completedTodos.length>0) && <h3>Completed task</h3>}
            {completedTodos.map((item,index)=><p><del>{item}</del><i className="fas fa-undo" onClick={()=>{ UndoCompletedTodo(item,index)}}></i></p>)}
     
        </div>
    )
}

export default Completedtodo
