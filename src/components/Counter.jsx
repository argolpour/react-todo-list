const Counter = ({todos,completedTodos}) => {
    return (
        <div className="counter">
        <div className="counter-box">
      <span>Ongoing Task: <strong>{todos.length}</strong> </span> 
      <span>Completed Tsk: <strong>{completedTodos.length}</strong> </span>
      </div>
      </div>
    )
}

export default Counter
