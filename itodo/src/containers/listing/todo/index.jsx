import React from 'react';
import useStore from '../../stores/todoStore'

function Todo(props) {
    console.log(props)
    const {deleteTodo, updateTodo} = useStore();

    return (

        <li>
            <input type="checkbox" checked={!!props.completed} onChange={() => updateTodo(props.id)}/>
            <span>{props.text}</span>
            <button onClick={() => deleteTodo(props.id)}>Delete</button>
        </li>
    );
}

export default Todo;