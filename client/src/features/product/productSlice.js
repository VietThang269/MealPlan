import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestGetProducts(state, action) {
      state.loading = true;
    },

    responseGetProducts(state, action) {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
