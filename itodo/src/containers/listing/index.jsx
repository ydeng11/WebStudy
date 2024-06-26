import React from 'react';
import Todo from './todo';
import useStore from '../stores/todoStore'

function filterTodosByDate(todos, today) {
    return todos.filter(todo => {
        return todo.createdAt.getFullYear() === today.getFullYear()
            && todo.createdAt.getMonth() === today.getMonth()
            && todo.createdAt.getDate() === today.getDate();
    });
}



function Listing(props) {
    const {todos} = useStore();
    const filteredTodos = filterTodosByDate(todos, props.today);

    return (
        <ul>
            {filteredTodos.map(todo => <Todo {...todo} key={todo.id}/>)}
        </ul>
    );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default Listing
