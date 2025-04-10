import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Summary } from "../assets/data";
import Chart from "./Chart";
import UserInfo from "./UserInfo";

export default function Dashboard() {
    const navigate = useNavigate();
    const [stats, setStats] = useState([]);

    useEffect(() => {
        setStats([
            { id: 1, label: "Total Tasks", total: Summary.tasks.todo + Summary.tasks["in progress"] + Summary.tasks.complete, icon: "📋", bg: "bg-gradient-to-r from-blue-500 to-blue-700" },
            { id: 2, label: "Completed Tasks", total: Summary.tasks.complete, icon: "✅", bg: "bg-gradient-to-r from-green-500 to-green-700" },
            { id: 3, label: "In Progress", total: Summary.tasks["in progress"], icon: "⏳", bg: "bg-gradient-to-r from-yellow-500 to-yellow-700" },
            { id: 4, label: "To Do", total: Summary.tasks.todo, icon: "⚠️", bg: "bg-gradient-to-r from-red-500 to-red-700" },
        ]);
    }, []);

    useEffect(() => {
        toast.success("Welcome to the Dashboard!");
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => (
                    <div key={stat.id} className={`p-6 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${stat.bg}`}>
                        <div className="text-4xl mb-2">{stat.icon}</div>
                        <h2 className="text-lg font-semibold">{stat.label}</h2>
                        <p className="text-2xl font-bold">{stat.total}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-lg font-semibold mb-4">📈 Task Progress</h2>
                <Chart />
            </div>

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
        </div>
    );
}

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

const TaskRow = ({ task }) => (
    <tr className="border hover:bg-gray-50">
        <td className="p-3 border">{task.title}</td>
        <td className="p-3 border">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${task.priority === "High" ? "bg-red-500 text-white" : task.priority === "Medium" ? "bg-yellow-500 text-white" : "bg-green-500 text-white"}`}>
                {task.priority}
            </span>
        </td>
        <td className="p-3 border">
            <div className="flex space-x-2">
                {task.team.map((member, index) => (
                    <UserInfo key={index} user={member} />
                ))}
            </div>
        </td>
        <td className="p-3 border">{task.date}</td>
    </tr>
);