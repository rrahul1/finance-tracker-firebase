import { useState } from "react";
import { useAddTodo } from "../../hooks/useAddTodo";

export const TodoList = () => {
  const { addTodo } = useAddTodo();

  const [description, setDescription] = useState("");
  const [type, setType] = useState("priority");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      description: "new",
      type: "expense",
    });
  };

  return (
    <>
      <div className="todo">
        <div className="container">
          <h1>Todo List </h1>
          <div className="list">
            <h3>Your Tasks</h3>
            <h2>Priority Task</h2>
          </div>
          <div className="summary">
            <div className="priority">
              <h4>Priority</h4>
            </div>
          </div>
          <form className="add-todo" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Task"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="priority">Priority</label>
            <input
              type="radio"
              id="priority"
              value="priority"
              checked={type === "priority"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="basic">Basic</label>
            <input
              type="radio"
              id="basic"
              value="basic"
              checked={type === "basic"}
              onChange={(e) => setType(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      <div className="added-list">Todo List</div>
    </>
  );
};
