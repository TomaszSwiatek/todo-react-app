import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.map(todo => {
        return (
            <li key={todo.id}>
                {todo.content}
                <button onClick={() => { deleteTodo(todo.id) }}>x</button>
            </li>
        )
    })
    return (
        <div className="todos">
            <ul>
                {todoList}

            </ul>
        </div>
    )
}

export default Todos;