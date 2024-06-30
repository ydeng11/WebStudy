import TodoItem from "@/components/display/todoItem";
import useStore from "@/components/stores/todoStore";

const TodoList = () => {
    const {todos} = useStore();
    return (
        <div className="p-4 w-full">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    );
};

export default TodoList;
