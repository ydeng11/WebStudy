import {create} from "zustand";

const todos = [
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

const useStore = create((set) => ({
    todos: todos,
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]})),
    deleteTodo: (id) => set((state) => ({todos: state.todos.filter(todo => todo.id !== id)})),
    updateTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),
}));

export default useStore;