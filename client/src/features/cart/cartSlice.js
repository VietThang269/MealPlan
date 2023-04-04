import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  userId: 0,
  total: 0,
  loading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    requestGetCart(state, action) {
      state.loading = true;
    },
    responseGetCart(state, action) {
      state.loading = false;
    },

    addToCart(state, action) {},
    removeFromCart(state, action) {},
    updateCart(state, action) {},
  },
});

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions;

export default cartSlice.reducer;
