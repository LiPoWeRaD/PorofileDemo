import { Dispatch } from "redux";
import axios from "axios";
import API_URL from "../../api/API_URL";
import { BlogsAction, FETCH_BLOGS } from "../../types/fetchBlogs";
import { BlogAction, FETCH_BLOG } from "../../types/fetchBlog";
import { SitesAction, FETCH_SITES } from "../../types/fetchSites";


const API = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

export const fetchBlogs = () => {
    return async (dispatch: Dispatch<BlogsAction>) => {
        dispatch({ type: FETCH_BLOGS.REQUEST });
        await API.get("/Blogs").then(res => {
            dispatch({ type: FETCH_BLOGS.SUCCESS, payload: res.data });
        }).catch(err => {
            dispatch({ type: FETCH_BLOGS.FAILURE, payload: err.message })
        })
    }
}

export const fetchBlog = (id: number) => {
    return async (dispatch: Dispatch<BlogAction>) => {
        dispatch({ type: FETCH_BLOG.REQUEST });
        await API.get(`/Blogs?id=${id}`).then(res => {
            dispatch({ type: FETCH_BLOG.SUCCESS, payload: res.data[0] });
        }).catch(err => {
            dispatch({ type: FETCH_BLOG.FAILURE, payload: err.message })
        })
    }
}

export const fetchSites =() => {
    return async (dispatch: Dispatch<SitesAction>) => {
        dispatch({ type: FETCH_SITES.REQUEST });
        await API.get("/Works").then(res => {
            dispatch({ type: FETCH_SITES.SUCCESS, payload: res.data });
        }).catch(err => {
            dispatch({ type: FETCH_SITES.FAILURE, payload: err.message })
        })
    }
}