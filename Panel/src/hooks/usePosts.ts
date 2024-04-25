import { useQuery } from "@tanstack/react-query";
import { Post, postsService } from "src/services/postsServices";

const usePosts = (userId: number | undefined) => {
   
    return useQuery<Post[], Error>({
        // /users/1/posts
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],
        queryFn: postsService.getAll,
        staleTime: 1 * 60 * 1000 //1m doesn't request if its less than a minute old

    });
};

export default usePosts;
