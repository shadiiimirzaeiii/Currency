import APIClient from "./apiClient";

export interface Todo {
    id: number;
    title: string;
    useID: number;
    completed: boolean;
}

export const todosService = new APIClient<Todo>('/todos');
