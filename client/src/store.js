import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { counterSaga } from "./features/counter/counterSaga";
import { userSaga } from "./features/user/userSaga";
import { counterSlice } from "./features/counter/counterSlice";
import { userSlice } from "./features/user/userSlice";
import { all } from "redux-saga/effects";
import { cartSlice } from "./features/cart/cartSlice";
import { cartSaga } from "./features/cart/cartSaga";
import { productSlice } from "./features/product/productSlice";
import { productSaga } from "./features/product/productSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    cart: cartSlice,
    product: productSlice,
  },
  middleware: [saga],
});

function* rootSaga() {
  yield all([counterSaga(), userSaga(), cartSaga(), productSaga()]);
}

saga.run(rootSaga);
