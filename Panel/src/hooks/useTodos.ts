
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "./constancs";
import { todosService, Todo } from "src/services/todosService";

export const useTodos = () => {

    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todosService.getAll,
        staleTime: 60 * 1000, // 1 minute
    })

}
