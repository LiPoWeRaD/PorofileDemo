import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})