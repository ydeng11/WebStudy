import TodoItem from "@/components/display/todoItem";
import useStore from "@/components/stores/todoStore";
import {useQuery} from "@tanstack/react-query";
import {Ttodo} from "@/components/utils/types.tsx";

const TodoList = () => {
    const { data } = useQuery<Ttodo[]>({
        queryKey: ['todos'],
        initialData: [],
        queryFn: async () => {
            const response = await fetch("1.0/todo/all");
            console.log(response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonData = await response.json();
            return jsonData as Ttodo[]}
    })
    console.log(data);
    const { categoryFilter, hashtagFilter} = useStore();

    const filteredTodos = data
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
