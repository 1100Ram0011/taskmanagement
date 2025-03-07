import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-3 border border-gray-200">
      <h3 className="text-md font-medium mb-2">{task.title}</h3>

      {/* ✅ Priority Badge */}
      <span
        className={`px-2 py-1 text-xs font-semibold rounded-full ${
          task.priority === "High"
            ? "bg-red-500 text-white"
            : task.priority === "Medium"
            ? "bg-yellow-500 text-white"
            : "bg-green-500 text-white"
        }`}
      >
        {task.priority}
      </span>

      {/* ✅ Additional Info (Assigned User & Due Date) */}
      <div className="text-sm text-gray-600 mt-2">
        <p>👤 Assigned: {task.assignedTo || "Unassigned"}</p>
        <p>📅 Due: {task.dueDate || "No Deadline"}</p>
      </div>
    </div>
  );
};

export default TaskCard;
