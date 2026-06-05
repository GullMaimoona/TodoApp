import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";
import Navbar from "./components/Navbar";

// const tasksLists = [
//   { id: 1, title: "Sample task 1", isCompleted: false, createdAt: new Date() },
//   { id: 2, title: "Sample task 2", isCompleted: false, createdAt: new Date() },
//   { id: 3, title: "Sample task 3", isCompleted: false, createdAt: new Date() },
// ];

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const onInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const onAddTask = () => {
    const _tasks = [...tasks];

    _tasks.push({
      id: _tasks.length + 1,
      title: newTask,
      isCompleted: false,
      createdAt: new Date(),
    });

    setTasks(_tasks);
    setNewTask("");
  };


  console.log(tasks);

  return (
    <div className="min-h-screen bg-gray-300">
      <Navbar />

      {/* Center area */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-2xl min-h-[40vh] bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-5">Todo App</h1>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter task ..."
              className="flex-1 border p-2 rounded-lg outline-none"
              value={newTask}
              onChange={onInputChange}
            />
            <button
              className="bg-blue-500 text-white px-4 rounded-lg"
              onClick={onAddTask}
            >
              Add
            </button>
          </div>

          <List tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
