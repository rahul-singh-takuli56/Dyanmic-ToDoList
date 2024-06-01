/* eslint-disable react/prop-types */

import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 mt-10 pl-24 pr-10">
      <div className="flex flex-col mb-2 ">
        <label className="mb-1 font-semibold text-xl ">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-black/50 rounded w-[400px] focus:outline-none"
          required
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="mb-1 font-semibold text-xl">
          Description (optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border border-black/50 rounded h-[120px] w-1/2  focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="p-2 mb-10   bg-blue-500 hover:bg-blue-700 text-white rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
