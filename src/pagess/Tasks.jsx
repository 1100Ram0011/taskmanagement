 


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Title from "../components/Title";
// import BoardView from "../components/BoardView";
// import ListView from "../components/ListView";

// const Tasks = () => {
//   const location = useLocation();
//   const path = location.pathname.split("/")[1];

//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Fix login bug", priority: "High", assignedTo: "John", dueDate: "2025-03-05", status: "todo" },
//     { id: 2, title: "UI Improvements", priority: "Medium", assignedTo: "Jane", dueDate: "2025-03-07", status: "in-progress" },
//     { id: 3, title: "Deploy App", priority: "Low", assignedTo: "David", dueDate: "2025-03-10", status: "complete" },
//     { id: 4, title: "Integrate API", priority: "High", assignedTo: "Michael", dueDate: "2025-03-12", status: "in-progress" },
//     { id: 5, title: "Refactor Code", priority: "High", assignedTo: "Alice", dueDate: "2025-03-15", status: "in-progress" },
//     { id: 6, title: "Write Documentation", priority: "Medium", assignedTo: "Bob", dueDate: "2025-03-18", status: "in-progress" }
//   ]);

//   const [view, setView] = useState("board");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newTask, setNewTask] = useState({ title: "", priority: "Medium", assignedTo: "", dueDate: "", status: "todo" });

//   const filteredTasks = path === "completed"
//     ? tasks.filter(task => task.status === "complete")
//     : path === "in-progress"
//     ? tasks.filter(task => task.status === "in-progress")
//     : path === "todo"
//     ? tasks.filter(task => task.status === "todo")
//     : tasks;

//   const handleCreateTask = () => {
//     if (!newTask.title || !newTask.assignedTo || !newTask.dueDate) return;
//     setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
//     setIsModalOpen(false);
//     setNewTask({ title: "", priority: "Medium", assignedTo: "", dueDate: "", status: "todo" });
//   };

//   return (
//     <div className="p-4 md:p-6 relative">
//       <Title title={
//         path === "completed" ? "Completed Tasks" 
//         : path === "in-progress" ? "In Progress Tasks" 
//         : path === "todo" ? "TODO Tasks" 
//         : "Tasks"} 
//       />

//       {/* ✅ Mobile-friendly Buttons */}
//       <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
//         <button onClick={() => setView("board")} className={`p-3 rounded-lg w-full sm:w-auto ${view === "board" ? "bg-blue-600 text-white" : "bg-gray-300"}`}>📌 Board View</button>
//         <button onClick={() => setView("list")} className={`p-3 rounded-lg w-full sm:w-auto ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-300"}`}>📋 List View</button>
//         <button onClick={() => setIsModalOpen(true)} className="p-3 rounded-lg w-full sm:w-auto bg-green-600 text-white shadow-md">➕ Create Task</button>
//       </div>

//       {/* ✅ Task View */}
//       {view === "board" ? <BoardView tasks={filteredTasks} /> : <ListView tasks={filteredTasks} />}
      
//       {/* ✅ Mobile-Friendly Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl shadow-xl w-11/12 sm:w-1/2 md:w-1/3 border border-gray-200">
//             <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">Create New Task</h2>
//             <input type="text" placeholder="Title" className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
//             <input type="text" placeholder="Assigned To" className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" value={newTask.assignedTo} onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })} />
//             <input type="date" className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} />
            
//             <div className="flex justify-end space-x-2">
//               <button onClick={handleCreateTask} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">Create</button>
//               <button onClick={() => setIsModalOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-500">Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tasks;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "../componentss/Title";
import BoardView from "../componentss/BoardView";
import ListView from "../componentss/ListView";

const Tasks = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix login bug", priority: "High", assignedTo: "John", dueDate: "2025-03-05", status: "todo" },
    { id: 2, title: "UI Improvements", priority: "Medium", assignedTo: "Jane", dueDate: "2025-03-07", status: "in-progress" },
    { id: 3, title: "Deploy App", priority: "Low", assignedTo: "David", dueDate: "2025-03-10", status: "complete" },
    { id: 4, title: "Integrate API", priority: "High", assignedTo: "Michael", dueDate: "2025-03-12", status: "in-progress" },
    { id: 5, title: "Refactor Code", priority: "High", assignedTo: "Alice", dueDate: "2025-03-15", status: "in-progress" },
    { id: 6, title: "Write Documentation", priority: "Medium", assignedTo: "Bob", dueDate: "2025-03-18", status: "in-progress" }
  ]);

  const [view, setView] = useState("board");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", priority: "Medium", assignedTo: "", dueDate: "", status: "todo" });

  const filteredTasks = path === "completed"
    ? tasks.filter(task => task.status === "complete")
    : path === "in-progress"
    ? tasks.filter(task => task.status === "in-progress")
    : path === "todo"
    ? tasks.filter(task => task.status === "todo")
    : tasks;

  const handleCreateTask = () => {
    if (!newTask.title || !newTask.assignedTo || !newTask.dueDate) return;
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setIsModalOpen(false);
    setNewTask({ title: "", priority: "Medium", assignedTo: "", dueDate: "", status: "todo" });
  };

  return (
    <div className="p-4 md:p-6 relative">
      <Title title={
        path === "completed" ? "Completed Tasks" 
        : path === "in-progress" ? "In Progress Tasks" 
        : path === "todo" ? "TODO Tasks" 
        : "Tasks"} 
      />

      {/* ✅ View Switch Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
        <button onClick={() => setView("board")} className={`p-3 rounded-lg w-full sm:w-auto ${view === "board" ? "bg-blue-600 text-white" : "bg-gray-300"}`}>📌 Board View</button>
        <button onClick={() => setView("list")} className={`p-3 rounded-lg w-full sm:w-auto ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-300"}`}>📋 List View</button>
        <button onClick={() => setIsModalOpen(true)} className="p-3 rounded-lg w-full sm:w-auto bg-green-600 text-white shadow-md">➕ Create Task</button>
      </div>

      {/* ✅ Task View */}
      {view === "board" ? <BoardView tasks={filteredTasks} /> : <ListView tasks={filteredTasks} />}
      
      {/* ✅ Task Creation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-11/12 sm:w-1/2 md:w-1/3 border border-gray-200">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">Create New Task</h2>

            {/* Title Input */}
            <input 
              type="text" 
              placeholder="Title" 
              className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              value={newTask.title} 
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} 
            />

            {/* Assigned To Input */}
            <input 
              type="text" 
              placeholder="Assigned To" 
              className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              value={newTask.assignedTo} 
              onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })} 
            />

            {/* Due Date Input */}
            <input 
              type="date" 
              className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              value={newTask.dueDate} 
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} 
            />

            {/* ✅ Priority Dropdown */}
            <select 
              className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              value={newTask.priority} 
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <option value="High">🔥 High</option>
              <option value="Medium">⚡ Medium</option>
              <option value="Low">✅ Low</option>
            </select>

            <div className="flex justify-end space-x-2">
              <button onClick={handleCreateTask} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">Create</button>
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-500">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
  