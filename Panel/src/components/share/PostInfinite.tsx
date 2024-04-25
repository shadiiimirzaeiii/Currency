import usePostsWithInfinite from "src/hooks/usePostsWithInfiniteQuery";
import Button from "./Button";

const PostInfinite = () => {
  const pageSize = 10;
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    usePostsWithInfinite({ pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    error.message;
  }
  return (
    <>
      {data?.pages.map((post) => {
        post.map(({ title },index) => {
          return (
            <div className="text-gray-950 p-2 border rounded-md" key={index}>
              <span>{title}</span>
            </div>
          );
        });
      })}

      <div className="flex justify-center gap-4 my-4 w-24">
        <Button primary disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          Load More
        </Button>
      </div>
    </>
  );
};

export default PostInfinite;
