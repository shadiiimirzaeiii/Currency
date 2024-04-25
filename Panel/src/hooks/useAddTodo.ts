import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "./constancs";
import { todosService, Todo } from "src/services/todosService";

interface AddTodoContext {
    previousTodo: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todosService.post,

        onMutate: (newTodo: Todo) => {
            const previousTodo = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
            // Approach :updating the data in the cache
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
                newTodo,
                ...todos,
            ]);

            onAdd();
            return { previousTodo };
        },

        onSuccess: (savedTodo, newTodo) => {
            //savedTodo from backend new Todo on the client 
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) =>
                    todo === savedTodo ? savedTodo : todo
                )
            );
        },

        onError: (error, newTodo, context) => {
            if (!context) return;
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodo);
        },

    });
}

export default useAddTodo