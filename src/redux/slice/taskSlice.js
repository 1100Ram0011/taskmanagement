import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  deletedTasks: JSON.parse(localStorage.getItem("deletedTasks")) || [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), ...action.payload });
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // ✅ Save to LocalStorage
    },
    deleteTask: (state, action) => {
      const taskIndex = state.tasks.findIndex((t) => t.id === action.payload);
      if (taskIndex !== -1) {
        const deletedTask = state.tasks.splice(taskIndex, 1)[0];
        state.deletedTasks.push(deletedTask);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
        localStorage.setItem("deletedTasks", JSON.stringify(state.deletedTasks));
      }
    },
    restoreTask: (state, action) => {
      const taskIndex = state.deletedTasks.findIndex((t) => t.id === action.payload);
      if (taskIndex !== -1) {
        const restoredTask = state.deletedTasks.splice(taskIndex, 1)[0];
        state.tasks.push(restoredTask);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
        localStorage.setItem("deletedTasks", JSON.stringify(state.deletedTasks));
      }
    },
    deletePermanently: (state, action) => {
      state.deletedTasks = state.deletedTasks.filter((t) => t.id !== action.payload);
      localStorage.setItem("deletedTasks", JSON.stringify(state.deletedTasks));
    },
  },
});

export const { addTask, deleteTask, restoreTask, deletePermanently } = taskSlice.actions;
export default taskSlice.reducer;
