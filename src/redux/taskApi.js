// src/redux/taskApi.js
import { apiSlice } from "./slices/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSubTask: builder.mutation({
      query: ({ data, id }) => ({
        url: `/tasks/${id}/subtasks`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const { useCreateSubTaskMutation } = taskApi;
