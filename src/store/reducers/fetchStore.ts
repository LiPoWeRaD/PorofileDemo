import { BlogsAction, FETCH_BLOGS } from "../../types/fetchBlogs"
import { BlogAction, FETCH_BLOG } from "../../types/fetchBlog"
import { SitesAction, FETCH_SITES } from "../../types/fetchSites"



const initialBlogsState = {
    blogs: [],
    loading: false,
    error: null
}

const initialSitesState = {
    sites: [],
    loading: false,
    error: null
}

const initialBlogState = {
    blog: undefined,
    loading: false,
    error: null
}

export const fetchBlogsReducer = (state = initialBlogsState, action: BlogsAction) => {
    switch (action.type) {
        case FETCH_BLOGS.REQUEST:
            return { ...state, loading: true, error: null }
        case FETCH_BLOGS.SUCCESS:
            return { ...state, blogs: action.payload, loading: false, error: null }
        case FETCH_BLOGS.FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}

export const fetchBlogReducer = (state = initialBlogState, action: BlogAction) => {
    switch (action.type) {
        case FETCH_BLOG.REQUEST:
            return { ...state, loading: true, error: null }
        case FETCH_BLOG.SUCCESS:
            return { ...state, blog: action.payload, loading: false, error: null }
        case FETCH_BLOG.FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}

export const fetchSitesReducer = (state = initialSitesState, action: SitesAction) => {
    switch (action.type) {
        case FETCH_SITES.REQUEST:
            return { ...state, loading: true, error: null }
        case FETCH_SITES.SUCCESS:
            return { ...state, sites: action.payload, loading: false, error: null }
        case FETCH_SITES.FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}