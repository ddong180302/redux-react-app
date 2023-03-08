

const Todo = (props) => {
    const { todos, title, handleDelete } = props;

    const DeleteClick = (id) => {
        handleDelete(id)
    }
    return (
        <div className="todo-container">
            <div>{title}</div>
            <div className="todo-list">
                {
                    todos.map(item => {
                        return (
                            <div key={item.id}>
                                <li >{item.title}
                                    <span onClick={() => DeleteClick(item.id)}>  X</span>
                                </li>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    );
}

export default Todo;