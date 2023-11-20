import { configureStore } from "@reduxjs/toolkit";
import paragraphsSlice from "./paragraphsSlice";

export const store = configureStore({
  reducer: { paragraphs: paragraphsSlice },
});
