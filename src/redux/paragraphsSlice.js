import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchParagraphs = createAsyncThunk(
  "paragraphs/getParagraphs",
  async ({ count, html }) => {
    const res = await axios(
      `https://baconipsum.com/api/?type=meat-and-filler&paras=${count}&start-with-lorem=1&format=${html}`
    );

    return res.data.split("\n");
  }
);

export const paragraphsSlice = createSlice({
  name: "paragraphs",
  initialState: {
    items: [],
    count: 2,
    html: "text",
    error: "",
  },
  reducers: {
    paragraphsCount: (state, action) => {
      state.count = action.payload;
    },
    isHtml: (state, action) => {
      state.html = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParagraphs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchParagraphs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        console.log(state.items);
      })
      .addCase(fetchParagraphs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { paragraphsCount, isHtml } = paragraphsSlice.actions;
export default paragraphsSlice.reducer;
