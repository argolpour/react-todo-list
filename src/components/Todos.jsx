import Todoitem from "./Todoitem"

const Todos = ({todos,RemoveTodo,CompleteTaskHandler}) => {
    return (
        <div className="todos-list">{todos.map((todo , index)=>
            <Todoitem todo={todo} key={index} index={index} RemoveTodo={RemoveTodo} CompleteTaskHandler={CompleteTaskHandler} />
            )}</div>
    )
}

export default Todos
