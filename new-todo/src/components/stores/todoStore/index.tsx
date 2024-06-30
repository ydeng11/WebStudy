import {create} from "zustand";
import {Ttodo} from "@/components/utils/types.tsx";

const todos: Ttodo[] = [
    {
        id: 1,
        category: 'Study',
        hashtag: ['react', 'typescript'],
        createdAt: new Date(2021, 5, 24, 10, 33, 30),
        content: 'Learn React',
        isDone: false
    },
    {
        id: 2,
        category: 'Entertainment',
        createdAt: new Date(),
        hashtag: ['Rest'],
        content: 'Rest',
        isDone: false
    },
];

export type TodoState = {
    todos: Ttodo[];
    addTodo: (todo: Ttodo) => void;
    deleteTodo: (id: number) => void;
    updateTodo: (id: number) => void;
};

const useStore = create<TodoState>((set) => ({
    todos: todos,
    addTodo: (todo: Ttodo) => set((state) => ({ todos: [...state.todos, todo] })),
    deleteTodo: (id: number) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
    updateTodo: (id: number) => set((state) => ({
        todos: state.todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
    })),
}));

export default useStore;