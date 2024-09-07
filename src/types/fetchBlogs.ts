import IBlogs from "./IBlogs";

export enum FETCH_BLOGS {
    REQUEST = "FETCH_BLOGS_REQUEST",
    SUCCESS = "FETCH_BLOGS_SUCCESS",
    FAILURE = "FETCH_BLOGS_FAILURE",
}

export type BlogsState = {
    data: IBlogs[];
    loading: boolean;
    error: string | null;
}

export type BlogsAction = {
    type: FETCH_BLOGS.REQUEST;
} | {
    type: FETCH_BLOGS.SUCCESS;
    payload: IBlogs[];
} | {
    type: FETCH_BLOGS.FAILURE;
    payload: string;
}