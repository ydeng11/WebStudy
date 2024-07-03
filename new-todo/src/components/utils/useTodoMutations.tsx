import {useMutation, useQueryClient} from "@tanstack/react-query";
import { Ttodo } from '@/components/utils/types.tsx';

const addTodo = async (todo: Ttodo): Promise<Ttodo> => {
    const response = await fetch("http://localhost:8080/1.0/todo/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    if (!response.ok) {
        throw new Error("Failed to add todo");
    }

    return response.json();
};

const updateTodo = async (todo: Ttodo): Promise<Ttodo> => {
    const response = await fetch(`http://localhost:8080/1.0/todo/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    if (!response.ok) {
        throw new Error("Failed to update todo");
    }

    return response.json();
};

export const useTodoMutations = () => {
    const queryClient = useQueryClient();

    const {mutate: addTodoMutation} = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey : ['todos']});
        },
    });

    const {mutate: updateTodoMutation} = useMutation({
        mutationFn:updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey : ['todos']});
        },
    });

    return { addTodoMutation, updateTodoMutation };
};
