// import React from "react";

import React, { useState } from "react";
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import moment from "moment";
import { summary } from "../assets/data";
import clsx from "clsx";
import { Chart } from "../components/Chart";
import { BGS, PRIOTITYSTYELS, TASK_TYPE, getInitials } from "../utils";
// import UserInfo from "../components/UserInfo";

// const TaskTable = ({ tasks }) => {
//   const ICONS = {
//     high: <MdKeyboardDoubleArrowUp />,
//     medium: <MdKeyboardArrowUp />,
//     low: <MdKeyboardArrowDown />,
//   };

//   const TableHeader = () => (
//     <thead className="border-b border-gray-300 ">
//       <tr className="text-black text-left">
//         <th className="py-2">Task Title</th>
//         <th className="py-2">Priority</th>
//         <th className="py-2">Team</th>
//         <th className="py-2 hidden md:block">Created At</th>
//       </tr>
//     </thead>
//   );

//   const TableRow = ({ task }) => (
//     <tr className="border-b border-gray-300 text-gray-600 hover:bg-gray-300/10">
//       <td className="py-2">
//         <div className="flex items-center gap-2">
//           <div
//             className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}
//           />
//           <p className="text-base text-black">{task.title}</p>
//         </div>
//       </td>

//       <td className="py-2">
//         <div className="flex gap-1 items-center">
//           <span className={clsx("text-lg", PRIOTITYSTYELS[task.priority])}>
//             {ICONS[task.priority]}
//           </span>
//           <span className="capitalize">{task.priority}</span>
//         </div>
//       </td>

//       <td className="py-2">
//         <div className="flex">
//           {task.team.map((m, index) => (
//             <div
//               key={index}
//               className={clsx(
//                 "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
//                 BGS[index % BGS.length]
//               )}
//             >
//               <UserInfo user={m} />
//             </div>
//           ))}
//         </div>
//       </td>
//       <td className="py-2 hidden md:block">
//         <span className="text-base text-gray-600">
//           {moment(task?.date).fromNow()}
//         </span>
//       </td>
//     </tr>
//   );

//   return (
//     <div className="w-full md:w-2/3 bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded">
//       <table className="w-full">
//         <TableHeader />
//         <tbody>
//           {tasks?.map((task, id) => (
//             <TableRow key={id} task={task} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const UserTable = ({ users }) => {
  const TableHeader = () => (
    <thead className="border-b border-gray-300 ">
      <tr className="text-black  text-left">
        <th className="py-2">Full Name</th>
        <th className="py-2">Status</th>
        <th className="py-2">Created At</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className="border-b border-gray-200  text-gray-600 hover:bg-gray-400/10">
      <td className="py-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-violet-700">
            <span className="text-center">{getInitials(user?.name)}</span>
          </div>
          <div>
            <p>{user.name}</p>
            <span className="text-xs text-black">{user?.role}</span>
          </div>
        </div>
      </td>

      <td>
        <p
          className={clsx(
            "w-fit px-3 py-1 rounded-full text-sm",
            user?.isActive ? "bg-blue-200" : "bg-yellow-100"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </p>
      </td>
      <td className="py-2 text-sm">{moment(user?.createdAt).fromNow()}</td>
    </tr>
  );

  return (
    <div className="w-full md:w-1/3 bg-white h-fit px-2 md:px-6 py-4 shadow-md rounded">
      <table className="w-full mb-5">
        <TableHeader />
        <tbody>
          {users?.map((user, index) => (
            <TableRow key={index + user?._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoWindowSize, setVideoWindowSize] = useState({ width: 300, height: 200 });

  const toggleVideo = () => setIsVideoOpen(!isVideoOpen);
  const handleResize = (e) => {
    const newWidth = e.clientX;
    const newHeight = e.clientY;
    if (newWidth > 200 && newWidth < 600 && newHeight > 150 && newHeight < 400) {
      setVideoWindowSize({ width: newWidth, height: newHeight });
    }
  };

  const totals = summary.tasks;

  const COLOR_MAP = {
    blue: "bg-blue-600/80",
    green: "bg-emerald-600/80",
    yellow: "bg-amber-500/80",
    red: "bg-rose-600/80",
  };

  const stats = [
    {
      _id: "1",
      label: "TOTAL TASK",
      total: summary?.totalTasks || 0,
      icon: <FaNewspaper />,
      bg: "bg-blue-600",
      cardBg: "blue",
    },
    {
      _id: "2",
      label: "COMPLTED TASK",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings />,
      bg: "bg-emerald-600",
      cardBg: "green",
    },
    {
      _id: "3",
      label: "TASK IN PROGRESS ",
      total: totals["in progress"] || 0,
      icon: <LuClipboardEdit />,
      bg: "bg-amber-500",
      cardBg: "yellow",
    },
    {
      _id: "4",
      label: "TODOS",
      total: totals["todo"],
      icon: <FaArrowsToDot />,
      bg: "bg-rose-600",
      cardBg: "red",
    },
  ];

  const Card = ({ label, count, bg, cardBg, icon }) => {
    return (
      <div
        className={clsx(
          "w-full h-32 p-5 shadow-md rounded-md flex items-center justify-between",
          COLOR_MAP[cardBg]
        )}
      >
        <div className="h-5rem flex flex-1 flex-col justify-between">
          <p className="text-base text-gray-200">{label}</p>
          <span className="text-2xl font-semibold text-white">{count}</span>
          <span className="text-sm text-gray-100">{"110 last month"}</span>
        </div>
        <div
          className={clsx(
            "w-10 h-10 rounded-full flex items-center justify-center text-white",
            bg
          )}
        >
          {icon}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {stats.map(({ icon, bg, label, total, cardBg }, index) => (
          <Card
            key={index}
            icon={icon}
            bg={bg}
            label={label}
            count={total}
            cardBg={cardBg}
          />
        ))}
      </div>

      <div className="w-full bg-white my-16 p-4 rounded shadow-sm">
        <h4 className="text-xl text-gray-600 font-semibold">Chart by Priority</h4>
        <Chart />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 2xl:gap-10 py-8">
        {/* <TaskTable tasks={summary.last10Task} /> */}
        <UserTable users={summary.users} />
      </div>
    </div>
  );
};

export default Dashboard;
