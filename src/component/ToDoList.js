import React from 'react';

const ToDoList = (props) => {
    return (
        <div>
            <ul>
            {props.todos.map((myTodos, index) => {
            return <li key={myTodos.name}>
                {myTodos.name}
                <button onClick={() => props.deleteTodo(index)}>Delete</button>
            </li>
            })}
            </ul>
        </div>
    )
}

export default ToDoList;