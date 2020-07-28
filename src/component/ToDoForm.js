import React from 'react';

const ToDoForm = (props) => {
    return (
        <div>
            <form onSubmit={(e) => props.handleForm(e)}>
                <label htmlFor="newTodo">Enter Todo</label>
                <input 
                onChange={(e) => props.handleInputChange(e)}
                id="newTodo"
                name="newTodo"
                value={props.userTodo}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default ToDoForm;