/* eslint-disable react/prop-types */

import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, moveTask, index }) => {
  const handleMove = () => {
    const newStatus =
      task.status === "Pending"
        ? "In Progress"
        : task.status === "In Progress"
        ? "Completed"
        : task.status;
    if (newStatus === "Completed") {
      task.timestamp = new Date().toLocaleString("en-GB");
    }
    moveTask(task.id, newStatus);
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="p-4 mb-2 bg-white rounded shadow"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3 className="text-black/70">
            <span className="text-black text-lg  font-semibold">Title: </span>{" "}
            {task.title}
          </h3>
          {task.description && (
            <p className="text-black/70">
              <span className="text-black text-lg  font-semibold">
                {" "}
                Description:
              </span>{" "}
              {task.description}
            </p>
          )}
          {task.status === "Completed" && (
            <p className="text-black/70">
              <span className="text-black text-lg  font-semibold ">
                {" "}
                Finish Time :
              </span>{" "}
              {task.timestamp}
            </p>
          )}
          {task.status !== "Completed" && (
            <button
              onClick={handleMove}
              className="mt-2 px-5 text-xl py-2 bg-green-500 text-white rounded"
            >
              {task.status === "Pending" ? "Start" : "Complete"}
            </button>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
