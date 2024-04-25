import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    userId: number;
    body: string;
}

interface PostQuery {
    pageSize: number;
}

const usePostsWithInfinite = (query: PostQuery) => {

    const fetchPosts = ({ pageParam = 1 }) =>
        axios
            .get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _start: (pageParam - 1) * query.pageSize,
                    _limit: query.pageSize,
                },
            })
            .then((res) => res.data);

    return useInfiniteQuery<Post[], Error>({
        queryKey: ["posts", query],
        //TODO Refactor useInfiniteQuery
        queryFn: () => fetchPosts({}),

        initialPageParam: 1,
        // doesn't request if its less than a minute old
        staleTime: 1 * 60 * 1000, // 1m
        getNextPageParam: (lastPage, allPages) => {
            // a good api return total number record a ahead of time so we can calculate ..
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });
};

export default usePostsWithInfinite;
