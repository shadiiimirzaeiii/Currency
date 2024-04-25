import { useRef } from "react";
import useAddTodo from "src/hooks/useAddTodo";
import Button from "../share/Button";

function TodoForm() {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  return (
    <>
      <h1 className="my-4">Todo Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: 0,
              useID: 1,
              title: ref.current?.value,
              completed: true,
            });
          }
        }}
        className="row mb-3"
      >
        <div className="flex gap-2">
          <input
            ref={ref}
            type="text"
            className="border border-gray-300 rounded px-2 py-1 flex-1 "
            placeholder="Enter Todo"
          />
          <div className="w-20 my-2">
            <Button primary>ADD</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
