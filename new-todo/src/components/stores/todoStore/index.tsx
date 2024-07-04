import {create} from "zustand";

export type CategoryFilter = {
    category: string;
}

export type HashtagFilter = {
    hashtag: string;
}

export type TodoState = {
    count: number
    incrementCount: () => void;
    // todos: Ttodo[];
    // setTodos: (todos: Ttodo[]) => void;
    // addTodo: (todo: Ttodo) => void;
    // deleteTodo: (id: string) => void;
    // toggleTodo: (id: string) => void;
    categoryFilter: CategoryFilter;
    hashtagFilter: HashtagFilter;
    setCategoryFilter: (categoryFilter: CategoryFilter) => void;
    setHashtagFilter: (hashtagFilter: HashtagFilter) => void;
};

const useStore = create<TodoState>((set) => ({
    count: 0,
    incrementCount: () => set((state) => ({count: state.count + 1})),
    // todos: [],
    // setTodos: (todos: Ttodo[]) => set(() => ({todos})),
    // addTodo: (todo: Ttodo) => set((state) => ({ todos: [...state.todos, todo] })),
    // deleteTodo: (id: string) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
    // toggleTodo: (id: string) => {
    //     console.log("toggleTodo");
    //     set((state) => ({
    //         todos: state.todos.map((todo) =>
    //             todo.id === id ? { ...todo, isDone: todo.isDone === 1 ? 0 : 1 } : todo
    //         ),
    //     }));
    // },
    categoryFilter: {category: 'All'},
    hashtagFilter: {hashtag: 'All'},
    setCategoryFilter: (categoryFilter: CategoryFilter) => set(() => ({categoryFilter})),
    setHashtagFilter: (hashtagFilter: HashtagFilter) => set(() => ({hashtagFilter})),
}));

export default useStore;