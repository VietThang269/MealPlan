import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { counterSaga } from "./features/counter/counterSaga";
import counterSlice from "./features/counter/counterSlice";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: [saga],
});

saga.run(counterSaga);
