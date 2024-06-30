import {create} from "zustand";

const todos: Ttodo[] = [
    {
        id: 1,
        createdAt: new Date(2021, 5, 24, 10, 33, 30),
        text: 'Learn React',
        completed: false
    },
    {
        id: 2,
        createdAt: new Date(),
        text: 'Rest',
        completed: false
    },
];

export type Ttodo = {
    id: number;
    createdAt: Date;
    text: string;
    completed: boolean;
};

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
        todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })),
}));

export default useStore;