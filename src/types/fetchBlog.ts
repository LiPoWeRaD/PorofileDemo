import IBlogs from "./IBlogs";

export enum FETCH_BLOG {
    REQUEST = "FETCH_BLOG_REQUEST",
    SUCCESS = "FETCH_BLOG_SUCCESS",
    FAILURE = "FETCH_BLOG_FAILURE",
}

export type BlogState = {
    data: IBlogs;
    loading: boolean;
    error: string | null;
}

export type BlogAction = {
    type: FETCH_BLOG.REQUEST;
} | {
    type: FETCH_BLOG.SUCCESS;
    payload: IBlogs;
} | {
    type: FETCH_BLOG.FAILURE;
    payload: string;
}