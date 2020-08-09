import React from 'react';

const Todos = ({ todos }) => {

    const todoList = todos.map(todo => {
        return (
            <li key={todo.id}>
                {todo.content}
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