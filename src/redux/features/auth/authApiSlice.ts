import { api } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApiSlice = api.injectEndpoints({
  endpoints: (builder: any) => ({
    loginUser: builder.mutation({
      query: (data: { email: string; password: string }) => {
        return {
          url: `/api/login`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: data,
        };
      },
      async onQueryStarted(
        _: any,
        { queryFulfilled, dispatch }: { queryFulfilled: any; dispatch: any }
      ) {
        try {
          const result = await queryFulfilled;

          console.log("result", result);

          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: result?.data?.token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: result?.data?.token,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      providesTags: [""],
    }),
    signupUser: builder.mutation({
      query: (data: { email: string; password: string }) => {
        return {
          url: `/api/register`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: data,
        };
      },
      async onQueryStarted(
        _: any,
        { queryFulfilled, dispatch }: { queryFulfilled: any; dispatch: any }
      ) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: result?.data?.token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: result?.data?.token,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginUserMutation, useSignupUserMutation } = authApiSlice;
