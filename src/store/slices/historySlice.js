import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      const product = action.payload;

      // remove duplicate
      state.items = state.items.filter((item) => item.id !== product.id);

      // new product on top
      state.items.unshift(product);

      // only last 6 then pop data
      if (state.items.length > 4) {
        state.items.pop();
      }

      // localStorage save data
      localStorage.setItem("browsingHistory", JSON.stringify(state.items));
    },

    loadHistory: (state) => {
      const stored = localStorage.getItem("browsingHistory");
      if (stored) {
        state.items = JSON.parse(stored);
      }
    },
  },
});

export const { addToHistory, loadHistory } = historySlice.actions;
export default historySlice.reducer;
