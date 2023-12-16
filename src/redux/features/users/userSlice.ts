import { api } from "../../api/apiSlice";

export const authApiSlice = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllUsers: builder.query({
      query: ({ page }: { page: number }) => {
        return {
          url: `/api/users?page=${page || 1}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = authApiSlice;
