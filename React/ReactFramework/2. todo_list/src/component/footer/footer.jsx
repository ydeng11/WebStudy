import React, { Component } from 'react';
import PropType from 'prop-types'
import './footer.css'

export default class Footer extends Component {
    static propTypes = {
        todos : PropType.array.isRequired,
        checkAllTodo : PropType.func.isRequired,
        deleteAllCompleted : PropType.func.isRequired
    }

    render() {
        const {todos, checkAllTodo, deleteAllCompleted} = this.props;
        const numberOfCompletedTasks = todos.filter((todo) => todo.completed).length
        return (
            <div className="todo-footer">
                <label>
                {/*defaultChecked only work for the first time and won't be updated*/}
                <input type="checkbox" 
                checked={numberOfCompletedTasks === todos.length && numberOfCompletedTasks !== 0}
                onChange={(e) => checkAllTodo(e.target.checked)}/>
                </label>
                <span>
                <span>Done {numberOfCompletedTasks} </span> / Total {todos.length}
                </span>
                <button className="btn btn-danger" onClick={() => deleteAllCompleted()}>Delete completed tasks</button>
            </div>
        );
    }
}