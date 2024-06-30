import TodoItem from "@/components/display/todoItem";
import useStore from "@/components/stores/todoStore";

const TodoList = () => {
    const {todos, categoryFilter, hashtagFilter} = useStore();
    const filteredTodos = todos
        .filter((todo) => (categoryFilter.category === 'All' || todo.category.toLowerCase() === categoryFilter.category.toLowerCase()))
        .filter((todo) => (hashtagFilter.hashtag === 'All' || todo.hashtag.includes(hashtagFilter.hashtag.toLowerCase())));
    return (
        <div className="p-4 w-full">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    );
};

export default TodoList;
