import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialPost = {
  loading: false,
  posts: [],
  error: null,
};

export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      console.log("data : ", res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "something went wrong");
    }
  },
);

const postSlice = createSlice({
  name: "posts",
  initialState: initialPost,
  reducers: {},
  extraReducers: (builder) => {
    (builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        console.log("state : ", action.payload);
        state.posts = action.payload.posts;
      }),
      builder.addCase(fetchPost.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error));
      }));
  },
});

export default postSlice.reducer;
