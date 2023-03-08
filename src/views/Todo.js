

const Todo = (props) => {
    const todos = props.todos;
    return (
        <div className='todo-container'>
            <div className="title">
                {props.title}
            </div>
            <div className='todo-list'>
                {todos.map(item => {
                    return (
                        <li className='todo-child' key={item.id}>Công việc: {item.work}, Tuổi: {item.age}</li>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Todo;