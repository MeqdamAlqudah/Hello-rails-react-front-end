import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./greeting/greeting";
const store = configureStore({reducer:rootReducer,middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
  thunk,logger
)});


export default store
