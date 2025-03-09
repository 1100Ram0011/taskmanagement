// import React from "react";
// import TaskCard from "./TaskCard";

// const BoardView = ({ tasks, onEdit, onDelete }) => {
//   const statuses = ["todo", "in progress", "complete"];

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {statuses.map((status) => (
//         <div key={status} className="bg-gray-100 p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-bold capitalize mb-3">{status}</h2>
//           {tasks
//             .filter((task) => task.status === status)
//             .map((task) => (
//               <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardView;
// import React from "react";
// import TaskCard from "./TaskCard";

// const BoardView = ({ tasks, onEdit, onDelete }) => {
//   const statuses = ["todo", "in progress", "complete"];

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {statuses.map((status) => (
//         <div key={status} className="bg-gray-100 p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-bold capitalize mb-3">{status}</h2>
//           {tasks
//             .filter((task) => task.status.toLowerCase() === status) // ✅ Fix Case Sensitivity
//             .map((task) => (
//               <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardView;
import React from "react";
import TaskCard from "./TaskCard";

const BoardView = ({ tasks, onEdit, onDelete }) => {
  const statuses = ["todo", "in progress", "complete"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {statuses.map((status) => (
        <div key={status} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold capitalize mb-3">{status}</h2>
          {tasks
            .filter((task) => task.status.toLowerCase() === status) // ✅ Fix Case Sensitivity
            .map((task) => (
              <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default BoardView;
