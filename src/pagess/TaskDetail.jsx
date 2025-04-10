import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ✅ Get Task ID from URL
import { useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskDetail = () => {
  const { id } = useParams(); // 🆔 Get Task ID from URL
  const [task, setTask] = useState(null);
  const { tasks } = useSelector((state) => state.task); // 🔥 Redux Store

  useEffect(() => {
    const selectedTask = tasks.find((t) => t.id === id); // 📝 Find Task by ID
    if (selectedTask) {
      setTask(selectedTask);
    }
  }, [id, tasks]);

  if (!task) {
    return <h2 className="text-center text-red-500">Task Not Found</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="text-gray-600">{task.description}</p>

      <div className="mt-4">
        <span className="px-3 py-1 bg-blue-500 text-white rounded-full">
          {task.status}
        </span>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>Due Date: {task.dueDate}</p>
        <p>Assigned To: {task.assignedTo}</p>
      </div>

      {/* 🛠 Edit & Delete Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded">
          <FaEdit /> Edit
        </button>
        <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded">
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
