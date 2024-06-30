import Todo from './todo';
import useStore, {Ttodo} from '../stores/todoStore'
import styles from  './index.module.css';

function filterTodosByDate(todos:Ttodo[], today: Date) {
    return todos.filter(todo => {
        return todo.createdAt.getFullYear() === today.getFullYear()
            && todo.createdAt.getMonth() === today.getMonth()
            && todo.createdAt.getDate() === today.getDate();
    });
}


function Listing(props: { today: Date }) {
    const {todos} = useStore();
    const filteredTodos = filterTodosByDate(todos, props.today);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Today's Todos</h2>
        <ul>
            {filteredTodos.map(todo => <Todo {...todo} key={todo.id}/>)}
        </ul>
            </div>
    );
}

export default Listing
