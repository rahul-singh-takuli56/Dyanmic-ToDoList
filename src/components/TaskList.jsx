/* eslint-disable react/prop-types */

import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const TaskList = ({ title, tasks, status, moveTask }) => {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-1/3 pl-24 pr-10 b"
        >
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          {tasks
            .filter((task) => task.status === status)
            .map((task, index) => (
              <Task
                key={task.id}
                task={task}
                moveTask={moveTask}
                index={index}
              />
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
