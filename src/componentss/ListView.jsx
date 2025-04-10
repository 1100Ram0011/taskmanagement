// import React from "react";
// import TaskCard from "./TaskCard";

// const ListView = ({ tasks, onEdit, onDelete }) => {
//   return (
//     <table className="w-full border-collapse border border-gray-200">
//       <thead className="bg-gray-100">
//         <tr className="text-left">
//           <th className="p-3 border">Task Title</th>
//           <th className="p-3 border">Priority</th>
//           <th className="p-3 border">Assigned To</th>
//           <th className="p-3 border">Due Date</th>
//           <th className="p-3 border">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tasks.map((task) => (
//           <tr key={task.id} className="border hover:bg-gray-50">
//             <td className="p-3 border">{task.title}</td>
//             <td className="p-3 border">{task.priority}</td>
//             <td className="p-3 border">{task.assignedTo}</td>
//             <td className="p-3 border">{task.dueDate}</td>
//             <td className="p-3 border">
//               <button onClick={() => onEdit(task)} className="text-blue-500 mx-2">✏️</button>
//               <button onClick={() => onDelete(task.id)} className="text-red-500">🗑️</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ListView;
import React from "react";

const ListView = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="p-3 border">Task</th>
            <th className="p-3 border hidden sm:table-cell">Priority</th>
            <th className="p-3 border">Assigned</th>
            <th className="p-3 border hidden sm:table-cell">Due</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border hover:bg-gray-50 text-sm sm:text-base">
              <td className="p-3 border">{task.title}</td>
              <td className="p-3 border hidden sm:table-cell">
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
              </td>
              <td className="p-3 border">{task.assignedTo}</td>
              <td className="p-3 border hidden sm:table-cell">{task.dueDate}</td>
              <td className="p-3 border flex items-center space-x-2">
                <button onClick={() => onEdit(task)} className="text-blue-500">✏️</button>
                <button onClick={() => onDelete(task.id)} className="text-red-500">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
