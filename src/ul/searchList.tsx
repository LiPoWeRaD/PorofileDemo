import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import IBlogs from "../types/IBlogs"
import { useActions } from "../hooks/useActions"
import { store } from "../store"
import { NavLink } from "react-router-dom"

interface ISearchList {
    id?: string
    search: string
    setSearch: Dispatch<SetStateAction<string>>;
}

const SearchList: FC<ISearchList> = ({id, search, setSearch}) => {
    const [blogs, setBlogs] = useState<IBlogs[] | undefined>()

    const [blogsSearch, setBlogsSearch] = useState<IBlogs[] | null>()
    
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState<string | null>(null)

    const { fetchBlogs } = useActions()

    useEffect(() => {
        fetchBlogs()
    }, [])

    store.subscribe(() => {
        const state = store.getState()
        setLoading(state.fetchBlogReducer.loading)
        setError(state.fetchBlogReducer.error)
        setBlogs(state.fetchBlogsReducer.blogs)
    }) 

    const handleSearch = () => {
        if (search.length === 0) {
          setBlogsSearch(null)
        } else {
          setBlogsSearch(blogs?.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase())))
        }
      }

    useEffect(() => {
        handleSearch()        
    }, [search])
    
    return (
        <div id={id} className="absolute z-10 top-14 flex flex-col gap-y-2 text-white opacity-90">
            {loading && (
                <div className="flex flex-col gap-y-16 py-32 container mx-auto">
                    <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px]">Loading...</h2>
                </div>
            )}

            {error && (
                <div className="flex flex-col gap-y-16 py-32 container mx-auto">
                    <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px]">Error...</h2>
                </div>
            )}

            {blogs && (
                <ul className="flex flex-col mx-3.5 gap-y-4 border-x  bg-slate-700">
                    {search && blogsSearch && blogsSearch?.length > 0 ? blogsSearch?.map((blog, index) => (
                        index < 5 && (
                            <li className="px-6 py-4 text-xl leading-8 font-medium border-y border-neutral-300" key={blog.id}>
                                <NavLink onClick={() => setSearch('')} className="hover:text-brand-1 focus-within:text-brand-1 active:text-brand-3" to={`/blogs/${blog.id}`}>{blog.title}</NavLink>
                            </li>
                        )
                    )) : ( 
                        search && <li className="px-6 py-4 text-xl leading-8 font-medium border-y border-neutral-300">No results</li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default SearchList