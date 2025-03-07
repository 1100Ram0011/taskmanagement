import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // ✅ Ensure Axios is installed

// ✅ Async Thunk for fetching users from API
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("/api/users"); // Adjust API endpoint as needed
  return response.data;
});

// ✅ Async Thunk for deleting a user
export const deleteUser = createAsyncThunk("user/deleteUser", async (userId) => {
  await axios.delete(`/api/users/${userId}`);
  return userId;
});

// ✅ User Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
