// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";

// // export default function Dashboard() {
// //     const navigate = useNavigate();
// //     const total : summmary.tasks
// //     const [stats, setStats] = useState([
// //         {
// //             id: 1,
// //             label: "Total Tasks",
// //             total: 10,
// //             icon: "📋",
// //             bg: "bg-blue-500",
// //         },
// //         {
// //             id: 2,
// //             label: "Completed Tasks",
// //             total: 3,
// //             icon: "✅",
// //             bg: "bg-green-500",
// //         },
// //         {
// //             id: 3,
// //             label: "In Progress",
// //             total: 5,
// //             icon: "⏳",
// //             bg: "bg-yellow-500",
// //         },
// //         {
// //             id: 4,
// //             label: "Pending Tasks",
// //             total: 2,
// //             icon: "⚠️",
// //             bg: "bg-red-500",
// //         },
// //     ]);

// //     useEffect(() => {
// //         toast.success("Welcome to the Dashboard!");
// //     }, []);

// //     const card=({label, count , bg, icon})=>{
// //       <div className={clsx("")}>

// //       </div>
       
// //     }
// //     return (
// //         <div className="p-6">
// //             <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //                 {stats.map((stat) => (
// //                     <div key={stat.id} className={`p-4 text-white rounded-lg ${stat.bg}`}>
// //                         <div className="text-3xl">{stat.icon}</div>
// //                         <h2 className="text-lg font-semibold">{stat.label}</h2>
// //                         <p className="text-xl">{stat.total}</p>
// //                     </div>
// //                 ))}
// //             </div>
// //             <div>
// //               chart by Peritoty
// //               </Chart>
// //             </div>
// //         </div>
// //     );
// // }
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Summary } from "../assets/data";
// import Chart from "../components/Chart";

// export default function Dashboard() {
//     const navigate = useNavigate();

//     // Extracting task summary dynamically
//     const totalTasks = Summary.tasks.todo + Summary.tasks["in progress"] + Summary.tasks.complete;
    
// const TableHeader=()=>{
//   <thead>
//     <tr>
//       <th>Task Title </th>
//       <th>periority</th>
//       <th>Team</th>
//       <th>Create At</th>
//     </tr>
//   </thead>
// }
// const TastRow=()=>{

// }

//     const [stats, setStats] = useState([
//         {
//             id: 1,
//             label: "Total Tasks",
//             total: totalTasks,
//             icon: "📋",
//             bg: "bg-gradient-to-r from-blue-500 to-blue-700",
//         },
//         {
//             id: 2,
//             label: "Completed Tasks",
//             total: Summary.tasks.complete,
//             icon: "✅",
//             bg: "bg-gradient-to-r from-green-500 to-green-700",
//         },
//         {
//             id: 3,
//             label: "In Progress",
//             total: Summary.tasks["in progress"],
//             icon: "⏳",
//             bg: "bg-gradient-to-r from-yellow-500 to-yellow-700",
//         },
//         {
//             id: 4,
//             label: "To Do",
//             total: Summary.tasks.todo,
//             icon: "⚠️",
//             bg: "bg-gradient-to-r from-red-500 to-red-700",
//         },
//     ]);

//     useEffect(() => {
//         toast.success("Welcome to the Dashboard!");
//     }, []);

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>
            
//             {/* ✅ Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {stats.map((stat) => (
//                     <div 
//                         key={stat.id} 
//                         className={`p-6 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${stat.bg}`}
//                     >
//                         <div className="text-4xl mb-2">{stat.icon}</div>
//                         <h2 className="text-lg font-semibold">{stat.label}</h2>
//                         <p className="text-2xl font-bold">{stat.total}</p>
//                     </div>
//                 ))}
//             </div>

//             {/* ✅ Chart Section */}
//             <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
//                 <h2 className="text-lg font-semibold mb-4">📈 Task Progress</h2>
//                 <Chart />
//             </div>

//             {/* ✅ Recent Tasks */}
//             <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
//                 <h2 className="text-lg font-semibold mb-4">📝 Recent Tasks</h2>
//                 <ul className="divide-y">
//                     {Summary.lastTasks.map((task, index) => (
//                         <li key={index} className="flex justify-between py-3">
//                             <div>
//                                 <strong>{task.title}</strong> <span className="text-gray-500">({task.stage})</span>
//                                 <p className="text-sm text-gray-500">{task.date}</p>
//                             </div>
//                             <span className={`px-3 py-1 text-xs font-semibold rounded-full 
//                                 ${task.priority === "High" ? "bg-red-500 text-white" : 
//                                 task.priority === "Medium" ? "bg-yellow-500 text-white" : 
//                                 "bg-green-500 text-white"}`}>
//                                 {task.priority}
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Summary } from "../assets/data"; // ✅ Ensure correct path
import Chart from "../components/Chart";

export default function Dashboard() {
    const navigate = useNavigate();

    // ✅ Define stats dynamically
    const [stats, setStats] = useState([]);

    useEffect(() => {
        setStats([
            {
                id: 1,
                label: "Total Tasks",
                total: Summary.tasks.todo + Summary.tasks["in progress"] + Summary.tasks.complete,
                icon: "📋",
                bg: "bg-gradient-to-r from-blue-500 to-blue-700",
            },
            {
                id: 2,
                label: "Completed Tasks",
                total: Summary.tasks.complete,
                icon: "✅",
                bg: "bg-gradient-to-r from-green-500 to-green-700",
            },
            {
                id: 3,
                label: "In Progress",
                total: Summary.tasks["in progress"],
                icon: "⏳",
                bg: "bg-gradient-to-r from-yellow-500 to-yellow-700",
            },
            {
                id: 4,
                label: "To Do",
                total: Summary.tasks.todo,
                icon: "⚠️",
                bg: "bg-gradient-to-r from-red-500 to-red-700",
            },
        ]);
    }, [Summary.tasks]);

    useEffect(() => {
        toast.success("Welcome to the Dashboard!");
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>

            {/* ✅ Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div 
                        key={stat.id} 
                        className={`p-6 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${stat.bg}`}
                    >
                        <div className="text-4xl mb-2">{stat.icon}</div>
                        <h2 className="text-lg font-semibold">{stat.label}</h2>
                        <p className="text-2xl font-bold">{stat.total}</p>
                    </div>
                ))}
            </div>

            {/* ✅ Chart Section */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-lg font-semibold mb-4">📈 Task Progress</h2>
                <Chart />
            </div>

            {/* ✅ Recent Tasks Table */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-lg font-semibold mb-4">📝 Recent Tasks</h2>
                <table className="w-full border-collapse border border-gray-200">
                    <TableHeader />
                    <tbody>
                        {Summary.lastTasks.map((task, index) => (
                            <TaskRow key={index} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ✅ Users Table (with Active/Inactive & Hours) */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-lg font-semibold mb-4">👥 User List</h2>
                <UserTable />
            </div>
        </div>
    );
}

// ✅ Table Header Component
const TableHeader = () => (
    <thead className="bg-gray-100">
        <tr className="text-left">
            <th className="p-3 border">Task Title</th>
            <th className="p-3 border">Priority</th>
            <th className="p-3 border">Team</th>
            <th className="p-3 border">Created At</th>
        </tr>
    </thead>
);

 
// ✅ Task Row Component
const TaskRow = ({ task }) => (
    <tr className="border hover:bg-gray-50">
        <td className="p-3 border">{task.title}</td>
        <td className="p-3 border">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                ${task.priority === "High" ? "bg-red-500 text-white" : 
                task.priority === "Medium" ? "bg-yellow-500 text-white" : 
                "bg-green-500 text-white"}`}>
                {task.priority}
            </span>
        </td>
        <td className="p-3 border">{task.team}</td>
        <td className="p-3 border">{task.date}</td>
    </tr>
);

// ✅ User Table Component (Active/Inactive + Hours Worked)
const UserTable = () => {
    const users = [
        { id: 1, name: "John Doe", role: "Admin", tasks: 12, hours: 40, active: true },
        { id: 2, name: "Jane Smith", role: "Editor", tasks: 8, hours: 30, active: true },
        { id: 3, name: "Sam Wilson", role: "Viewer", tasks: 5, hours: 20, active: false },
        { id: 4, name: "Chris Evans", role: "Editor", tasks: 10, hours: 35, active: true },
        { id: 5, name: "Natasha Romanoff", role: "Admin", tasks: 15, hours: 45, active: false },
    ];

    return (
        <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
                <tr className="text-left">
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Role</th>
                    <th className="p-3 border">Assigned Tasks</th>
                    <th className="p-3 border">Hours Worked</th>
                    <th className="p-3 border">Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id} className="border hover:bg-gray-50">
                        <td className="p-3 border">{user.name}</td>
                        <td className="p-3 border">{user.role}</td>
                        <td className="p-3 border">{user.tasks}</td>
                        <td className="p-3 border">{user.hours} hrs</td>
                        <td className="p-3 border">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                                ${user.active ? "bg-green-500 text-white" : "bg-gray-500 text-white"}`}>
                                {user.active ? "Active" : "Inactive"}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
