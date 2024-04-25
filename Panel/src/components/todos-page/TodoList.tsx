import { useTodos } from "src/hooks/useTodos";

const TodoList = () => {
  const { data, isLoading, error } = useTodos();

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    error.message;
  }
  return (
    <>
      {data?.map(({ title }, index) => {
        return (
          <div className="text-gray-950 p-2 border rounded-md" key={index}>
            <span>{title}</span>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
