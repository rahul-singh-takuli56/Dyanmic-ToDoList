import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: "Pending" }]);
  };

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: newStatus,
              ...(newStatus === "Completed" && {
                timestamp: new Date().toLocaleString("en-GB"),
              }),
            }
          : task
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const movedTask = tasks.find(
      (task) => task.id.toString() === result.draggableId
    );
    if (movedTask) {
      moveTask(movedTask.id, destination.droppableId);
    }
  };

  return (
    <div className=" container ">
      <Header />
      <Banner />
      <TaskForm addTask={addTask} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4">
          <TaskList
            title="Pending"
            tasks={tasks}
            status="Pending"
            moveTask={moveTask}
          />
          <TaskList
            title="In Progress"
            tasks={tasks}
            status="In Progress"
            moveTask={moveTask}
          />
          <TaskList
            title="Completed"
            tasks={tasks}
            status="Completed"
            moveTask={moveTask}
          />
        </div>
      </DragDropContext>
      <Footer />
    </div>
  );
}

export default App;
