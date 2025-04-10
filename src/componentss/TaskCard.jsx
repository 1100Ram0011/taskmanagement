 
import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-md mx-auto sm:max-w-sm md:max-w-lg">
      <h3 className="text-md font-medium mb-2 text-center sm:text-left">{task.title}</h3>

      {/* ✅ Priority Badge */}
      <div className="flex justify-center sm:justify-start">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full inline-block ${
            task.priority === "High"
              ? "bg-red-500 text-white"
              : task.priority === "Medium"
              ? "bg-yellow-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* ✅ Assigned User & Due Date */}
      <div className="text-sm text-gray-600 mt-2 flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p className="flex items-center justify-center sm:justify-start">
          👤 <span className="ml-1">{task.assignedTo || "Unassigned"}</span>
        </p>
        <p className="flex items-center justify-center sm:justify-end">
          📅 <span className="ml-1">{task.dueDate || "No Deadline"}</span>
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
