import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashRestore, FaTrash } from "react-icons/fa";

const Trash = () => {
  const dispatch = useDispatch();
  const { deletedTasks } = useSelector((state) => state.task); // 🗑 Get deleted tasks from Redux

  if (deletedTasks.length === 0) {
    return <h2 className="text-center text-gray-500 mt-10">No deleted tasks</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Deleted Tasks</h1>

      {deletedTasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center p-4 bg-gray-100 rounded-md mb-3"
        >
          <div>
            <h2 className="font-semibold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
          </div>

          {/* 🔄 Restore & ❌ Permanently Delete */}
          <div className="flex gap-4">
            <button
              onClick={() => dispatch(restoreTask(task.id))}
              className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              <FaTrashRestore /> Restore
            </button>
            <button
              onClick={() => dispatch(deletePermanently(task.id))}
              className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              <FaTrash /> Delete Forever
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trash;
