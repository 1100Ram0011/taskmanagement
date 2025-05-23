import { apiSlice } from "../apiSlice";

const TASKS_URL = '/task';

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASKS_URL}/dashboard`,
                method: "GET",
                credentials: "include"
            }),
        }),

        getAllTasks: builder.query({
            query: ({ strQuery, isTrashed, search }) => ({
                url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
                credentials: "include",
            }),
        }),

        createTask: builder.mutation({
            query: (data) => ({
                url: `${TASKS_URL}/create`,
                method: "POST",
                body:data,
                credentials: "include"
            }),
        }),
        duplicate: builder.mutation({
            query: (id) => ({
                url: `${TASKS_URL}/duplicate/${id}`,
                method: "POST",
                credentials: "include"
            }),
        }),

        updateTask: builder.mutation({
            query: (data) => ({
                url: `${TASKS_URL}/update/${data._id}`,
                method: "PUT",
                body:data,
                credentials: "include"
            }),
        }),
        trashTask: builder.mutation({
            query: (data) => ({
                url: `${TASKS_URL}/${data._id}`,
                method: "PUT",
                credentials: "include"
            }),
        }),

        createSubTask: builder.mutation({
            query: (data) => ({
                url: `${TASKS_URL}/create-subtask/${data._id}`,
                method: "PUT",
                body: data,
                credentials: "include"
            }),
        }),

        getSingleTask: builder.query({
            query: (id) => ({
                url: `${TASKS_URL}/${id}`,
                method: "GET",
                credentials: "include",
            }),
        }),

        postTaskActivity: builder.mutation({
            query: ({data,id}) => ({
                url: `${TASKS_URL}/activity/${id}`,
                method: "POST",
                body:data,
                credentials: "include"
            }),
        }),

        deleteRestoreTask: builder.mutation({
            query: ({id, actionType}) => ({
                url: `${TASKS_URL}/delete-restore/${id}?actionType=${actionType}`,
                method: "DELETE",
                credentials: "include"
            }),
        })

    })
});

export const {
    useGetDashboardStatsQuery,
    useGetAllTasksQuery,
    useDuplicateMutation,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useTrashTaskMutation,
    useCreateSubTaskMutation,
    useGetSingleTaskQuery,
    usePostTaskActivityMutation,
    useDeleteRestoreTaskMutation,
} = taskApiSlice
