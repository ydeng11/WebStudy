import {useMutation, useQueryClient} from "@tanstack/react-query";
import { Ttodo } from '@/components/utils/types.tsx';

const addTodo = async (todo: Ttodo): Promise<void> => {
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
    return;
};

const updateTodo = async (todo: Ttodo): Promise<void> => {
    const response = await fetch(`http://localhost:8080/1.0/todo/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    if (!response.ok) {
        throw new Error("Failed to update todo");
    } else {
        console.log(response);
    }
    return;
};

export const useTodoMutations = () => {
    const queryClient = useQueryClient();

    const {mutate: addTodoMutation} = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            return queryClient.removeQueries({queryKey : ['todos']});
        },
    });

    const {mutate: updateTodoMutation} = useMutation({
        mutationFn:updateTodo,
        onSuccess: () => {
            console.log("updateTodoMutation success");
            queryClient.invalidateQueries({queryKey : ['todos']}).then(() => {return});
        },
        onMutate: () => {
            console.log("updateTodoMutation onMutate");
        },
        onError: (error) => {
            console.error("addTodoMutation onError", error);
        },
        onSettled: () => {
            console.log("updateTodoMutation onSettled");
        },
    });

    return { addTodoMutation, updateTodoMutation };
};
