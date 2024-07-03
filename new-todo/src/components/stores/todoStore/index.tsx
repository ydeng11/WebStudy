import {create} from "zustand";
import {Ttodo} from "@/components/utils/types.tsx";

export type CategoryFilter = {
    category: string;
}

export type HashtagFilter = {
    hashtag: string;
}

export type TodoState = {
    todos: Ttodo[];
    setTodos: (todos: Ttodo[]) => void;
    addTodo: (todo: Ttodo) => void;
    deleteTodo: (id: number) => void;
    updateTodo: (id: number) => void;
    categoryFilter: CategoryFilter;
    hashtagFilter: HashtagFilter;
    setCategoryFilter: (categoryFilter: CategoryFilter) => void;
    setHashtagFilter: (hashtagFilter: HashtagFilter) => void;
};

const useStore = create<TodoState>((set) => ({
    todos: [],
    setTodos: (todos: Ttodo[]) => set(() => ({todos})),
    addTodo: (todo: Ttodo) => set((state) => ({ todos: [...state.todos, todo] })),
    deleteTodo: (id: number) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
    updateTodo: (id: number) => set((state) => ({
        todos: state.todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
    })),
    categoryFilter: {category: 'All'},
    hashtagFilter: {hashtag: 'All'},
    setCategoryFilter: (categoryFilter: CategoryFilter) => set(() => ({categoryFilter})),
    setHashtagFilter: (hashtagFilter: HashtagFilter) => set(() => ({hashtagFilter})),
}));

export default useStore;