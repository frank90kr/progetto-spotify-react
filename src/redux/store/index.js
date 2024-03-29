import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "../reducers/PlayerReducer";

const store = configureStore({
  reducer: PlayerReducer,
});

export default store;
