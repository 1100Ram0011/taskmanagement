// import React, { useState } from "react";
// import Title from "../components/Title";
// import BoardView from "../components/BoardView";
// import ListView from "../components/ListView";

// const Tasks = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Fix login bug", priority: "High", assignedTo: "John", dueDate: "March 5", status: "todo" },
//     { id: 2, title: "UI Improvements", priority: "Medium", assignedTo: "Jane", dueDate: "March 7", status: "in progress" },
//     { id: 3, title: "Deploy App", priority: "Low", assignedTo: "David", dueDate: "March 10", status: "complete" }
//   ]);

//   const [view, setView] = useState("board");

//   // ✅ Handle Task Deletion
//   const handleDelete = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   // ✅ Handle Task Edit (For now, just log it)
//   const handleEdit = (task) => {
//     console.log("Edit Task:", task);
//   };

//   return (
//     <div className="p-6">
//       <Title title="Tasks" />

//       {/* ✅ View Toggle Buttons */}
//       <div className="flex space-x-4 mb-4">
//         <button onClick={() => setView("board")} className={`p-2 rounded-lg ${view === "board" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
//           📌 Board View
//         </button>
//         <button onClick={() => setView("list")} className={`p-2 rounded-lg ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
//           📋 List View
//         </button>
//       </div>

//       {/* ✅ Show BoardView or ListView */}
//       {view === "board" ? <BoardView tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} /> : <ListView tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />}
//     </div>
//   );
// };

// export default Tasks;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Title from "../components/Title";
// import BoardView from "../components/BoardView";
// import ListView from "../components/ListView";

// const Tasks = () => {
//   const location = useLocation();
  
//   // Extract status from the URL path (e.g., "/completed")
//   const path = location.pathname.split("/")[1]; 

//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Fix login bug", priority: "High", assignedTo: "John", dueDate: "March 5", status: "todo" },
//     { id: 2, title: "UI Improvements", priority: "Medium", assignedTo: "Jane", dueDate: "March 7", status: "in progress" },
//     { id: 3, title: "Deploy App", priority: "Low", assignedTo: "David", dueDate: "March 10", status: "complete" }
//   ]);

//   const [view, setView] = useState("board");

//   // ✅ Filter tasks based on URL path
//   const filteredTasks = path === "completed" 
//     ? tasks.filter(task => task.status === "complete") 
//     : tasks;

//   // ✅ Handle Task Deletion
//   const handleDelete = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   // ✅ Handle Task Edit (For now, just log it)
//   const handleEdit = (task) => {
//     console.log("Edit Task:", task);
//   };

//   return (
//     <div className="p-6">
//       <Title title={path === "completed" ? "Completed Tasks" : "Tasks"} />

//       {/* ✅ View Toggle Buttons */}
//       <div className="flex space-x-4 mb-4">
//         <button onClick={() => setView("board")} className={`p-2 rounded-lg ${view === "board" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
//           📌 Board View
//         </button>
//         <button onClick={() => setView("list")} className={`p-2 rounded-lg ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
//           📋 List View
//         </button>
//       </div>

//       {/* ✅ Show BoardView or ListView with filtered tasks */}
//       {view === "board" 
//         ? <BoardView tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} /> 
//         : <ListView tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} />
//       }
//     </div>
//   );
// };

// export default Tasks;





















import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "../components/Title";
import BoardView from "../components/BoardView";
import ListView from "../components/ListView";

const Tasks = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix login bug", priority: "High", assignedTo: "John", dueDate: "March 5", status: "todo" },
    { id: 2, title: "UI Improvements", priority: "Medium", assignedTo: "Jane", dueDate: "March 7", status: "in-progress" },
    { id: 3, title: "Deploy App", priority: "Low", assignedTo: "David", dueDate: "March 10", status: "complete" },
    // ✅ New In-Progress Task
    { id: 4, title: "Integrate API", priority: "High", assignedTo: "Michael", dueDate: "March 12", status: "in-progress" }
  ]);

  const [view, setView] = useState("board");

  const filteredTasks = path === "completed"
    ? tasks.filter(task => task.status === "complete")
    : path === "in-progress"
    ? tasks.filter(task => task.status === "in-progress")
    : path === "todo"
    ? tasks.filter(task => task.status === "todo")
    : tasks;

  return (
    <div className="p-6">
      <Title title={path === "completed" ? "Completed Tasks" : path === "in-progress" ? "In Progress Tasks" : path === "todo" ? "TODO Tasks" : "Tasks"} />

      <div className="flex space-x-4 mb-4">
        <button onClick={() => setView("board")} className={`p-2 rounded-lg ${view === "board" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
          📌 Board View
        </button>
        <button onClick={() => setView("list")} className={`p-2 rounded-lg ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
          📋 List View
        </button>
      </div>

      {view === "board" 
        ? <BoardView tasks={filteredTasks} /> 
        : <ListView tasks={filteredTasks} />
      }
    </div>
  );
};

export default Tasks;
