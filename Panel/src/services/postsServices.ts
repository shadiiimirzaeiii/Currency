import APIClient from "./apiClient";

export interface Post {
    id: number;
    title: string;
    userId: number;
    body: string;
}


export const postsService = new APIClient<Post>('/posts');