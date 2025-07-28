import { useState } from "react";

const todos = [
  { id: 1, title: "Solve DSA Arrays Problems", due: "2025-07-30", done: false },
  { id: 2, title: "Join Databases Class", due: "2025-07-28", done: false },
  { id: 3, title: "Revise DSA New Topics", due: "2025-07-29", done: false },
  { id: 4, title: "Complete Frontend Project", due: "2025-07-31", done: false },
];

export default function TodoList() {
  const [tasks, setTasks] = useState(todos);
  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  return (
    <div className="mt-8 p-4 bg-white rounded-xl shadow w-full max-w-xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">To-Do List</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="h-5 w-5"
              />
              <span
                className={`text-sm ${
                  task.done ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {task.title}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              Due: {task.due}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
