import { useState } from "react";
// import usePosts from "src/hooks/usePosts";
import usePostsWithPagination from "src/hooks/usePostsWithPagination";
import Button from "./Button";

const PostList = () => {
  // const [userId, setUserID] = useState<number>();
  // const { data, isLoading, error } = usePosts(userId);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data, isLoading, error } = usePostsWithPagination({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    error.message;
  }
  return (
    <>
      {/* <select
        onChange={(e) => setUserID(parseInt(e.target.value))}
        className="form-select mb-3"
        value={userId}
      >
        <option value="1">User 1</option>
        <option value="2">User 2</option>
      </select> */}

      {data?.map(({ title }, index) => {
        return (
          <div className="text-gray-950 p-2 border rounded-md" key={index}>
            <span>{title}</span>
          </div>
        );
      })}
      <div className="flex justify-center gap-4 my-4">
        <Button
          isDisabled={page == 1}
          primary={true}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button primary={true} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </>
  );
};

export default PostList;
