import {useState} from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Ttodo} from "@/components/utils/types.tsx";
import {Button} from "@/components/ui/button.tsx";
import useStore from "@/components/stores/todoStore";
import styles from "./index.module.css";

const TodoItem = (props: Ttodo) => {
    const {deleteTodo, updateTodo} = useStore();
    const [isMouseIn, setIsMouseIn] = useState(false);
    return (

        <li className="flex items-center p-2.5 bg-white rounded shadow-sm mb-2.5"
            onMouseEnter={() => setIsMouseIn(true)}
            onMouseLeave={() => setIsMouseIn(false)}>

            <Checkbox
                id="completed"
                // checked={props.isDone}
                onCheckedChange={() => updateTodo(props.id)}
            />

            <span className={`${styles.text} ${props.isDone ? styles.completed : ''}`}>
                {props.content}
            </span>
            <Button
                variant="outline"
                onClick={() => deleteTodo(props.id)}
                style={{display:isMouseIn? "block" : "none"}}>Delete</Button>

        </li>
    );
};

export default TodoItem;
