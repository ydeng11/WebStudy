import React, {useState} from 'react';
import useStore from '../../stores/todoStore'
import styles from './index.module.css';

function Todo(props) {
    const {deleteTodo, updateTodo} = useStore();
    const [isMouseIn, setIsMouseIn] = useState(false);
    return (

        <li
            className={styles.todo}
            onMouseEnter={() => setIsMouseIn(true)}
            onMouseLeave={() => setIsMouseIn(false)}
        >
            <input type="checkbox" checked={!!props.completed} onChange={() => updateTodo(props.id)}/>
            <span className={`${styles.text} ${props.completed ? styles.completed : ''}`}>
                {props.text}
            </span>
            <button
                className={styles.deleteButton}
                onClick={() => deleteTodo(props.id)}
                style={{display:isMouseIn?"block":"none"}}
            >Delete</button>
        </li>
    );
}

export default Todo;