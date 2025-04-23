import clsx from "clsx";
import React, { useState } from "react";
import {
  MdAttachFile,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { BGS, PRIOTITYSTYELS, TASK_TYPE, formatDate } from "../utils";
import TaskDialog from "./task/TaskDialog";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import UserInfo from "./UserInfo";
import { IoMdAdd } from "react-icons/io";
import AddSubTask from "./task/AddSubTask";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const TaskCard = ({ task }) => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[#b0d2de] border border-[#fff] rounded-2xl shadow-2xl p-5 space-y-4 transition-all hover:shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div
            className={clsx(
              "flex items-center gap-2 text-sm font-semibold",
              PRIOTITYSTYELS[task?.priority]
            )}
          >
            <span className="text-xl">{ICONS[task?.priority]}</span>
            <span className="uppercase">{task?.priority} Priority</span>
          </div>
          {user?.isAdmin && <TaskDialog task={task} />}
        </div>

        {/* Title & Date */}
        <div>
          <div className="flex items-center gap-2 text-base font-medium text-black">
            <div
              className={clsx("w-3 h-3 rounded-full", TASK_TYPE[task.stage])}
            />
            <h4 className="line-clamp-1">{task?.title}</h4>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {formatDate(new Date(task?.date))}
          </p>
        </div>

        {/* SubTask Section */}
        <div className="border-t border-gray-200 pt-3">
          {task?.subTasks?.length > 0 ? (
            <>
              <p className="text-sm font-semibold text-gray-700 line-clamp-1">
                {task?.subTasks[0]?.title}
              </p>
              <div className="mt-1 flex items-center gap-4 text-sm">
                {/* <span className="text-gray-500">
                  {formatDate(new Date(task?.subTasks[0]?.date))}
                </span> */}
                <span className="bg-blue-100 text-[#686863] px-2 py-0.5 rounded-full">
                  {task?.subTasks[0]?.tag}
                </span>
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-400">No Sub Task</p>
          )}
        </div>

        {/* Footer: Add Subtask Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(true)}
            disabled={!user.isAdmin}
            className="flex items-center gap-2 text-sm font-semibold bg-emerald-600/80 px-3 py-2 rounded-xl text-white hover:text-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoMdAdd className="text-lg" />
            <span>Add Subtask</span>
          </button>
        </div>
      </div>

      <AddSubTask open={open} setOpen={setOpen} id={task._id} />
    </>
  );
};

export default TaskCard;
