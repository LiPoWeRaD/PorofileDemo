import { combineReducers } from "redux";
import { fetchBlogReducer, fetchBlogsReducer, fetchSitesReducer } from "./fetchStore";


export const rootReducer = combineReducers({
    fetchBlogsReducer,
    fetchBlogReducer,
    fetchSitesReducer
})

export type RootState = ReturnType<typeof rootReducer>