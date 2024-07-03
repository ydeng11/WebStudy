import {useEffect, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Ttodo} from "@/components/utils/types.tsx";
import {Button} from "@/components/ui/button.tsx";
import styles from "./index.module.css";
import {useTodoMutations} from "@/components/utils/useTodoMutations.tsx";
import useStore from "@/components/stores/todoStore";

function handleDelete(todo: Ttodo, deleteTodo: (id: string) => void, updateTodoMutation: (todo: Ttodo) => void) {
    deleteTodo(todo.id);
    updateTodoMutation({...todo, isDeleted: 1})
}

export default function TodoItem(props: Ttodo) {
    const {deleteTodo, toggleTodo} = useStore();
    const [Count, setCount] = useState(0);
    const {updateTodoMutation} = useTodoMutations();
    useEffect(() => {
        // This effect will run whenever todos, categoryFilter, or hashtagFilter changes
    }, [deleteTodo, toggleTodo]);
    const [isMouseIn, setIsMouseIn] = useState(false);
    return (

        <li className="flex items-center p-2.5 bg-white rounded shadow-sm mb-2.5"
            onMouseEnter={() => setIsMouseIn(true)}
            onMouseLeave={() => setIsMouseIn(false)}>

            <Checkbox
                id="completed"
                checked={props.isDone === 1}
                onCheckedChange={() => {
                    toggleTodo(props.id)
                    // setCount(Count + 1)
                    updateTodoMutation({...props, isDone: props.isDone === 1 ? 0 : 1})
                }}
            />

            <span className={`${styles.text} ${props.isDone === 1 ? styles.completed : ''}`}>
                {props.content}
            </span>
            <Button
                variant="outline"
                onClick={() => {
                    handleDelete(props, deleteTodo, updateTodoMutation)
                    // deleteTodo(props.id)
                    // updateTodoMutation({...props, isDeleted: props.isDeleted === 1 ? 0 : 1})
                }
            }
                style={{display:isMouseIn? "block" : "none"}}>Delete</Button>

        </li>
    );
}