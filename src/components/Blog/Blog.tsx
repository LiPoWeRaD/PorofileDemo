import { useEffect, useState } from "react"
import blog from "../../assets/blogs/blogs.jpeg"
import Mouse from "../../ul/mouse"
import IBlogs from "../../types/IBlogs"
import { useActions } from "../../hooks/useActions"
import { store } from "../../store"
import BlogView from "../../ul/blogView"

const Blog = () => {

    const [blogs, setBlogs] = useState<IBlogs | undefined>()

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState<string | null>(null)

    const { fetchBlogs } = useActions()

    useEffect(() => {
        fetchBlogs()
    }, [])

    store.subscribe(() => {
        const state = store.getState()
        setBlogs(state.fetchBlogsReducer.blogs[0])
        setLoading(state.fetchBlogsReducer.loading)
        setError(state.fetchBlogsReducer.error)
    })
    

    return (
        <div className="flex flex-col gap-y-16 py-32 container mx-auto">
            <div className="relative mb-[90px] flex justify-center">
                <Mouse serviceCard={{ title: "Blogs", description: 'My thoughts on technology and business, welcome to subscribe' }} />
            </div>
            {loading && (
                    <div className="flex flex-col gap-y-16 py-32 container mx-auto">
                        <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px]">Loading...</h2>
                    </div>
                )
            }

            {error && (
                    <div className="flex flex-col gap-y-16 py-32 container mx-auto">
                        <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px] text-red-500">{error}</h2>
                    </div>
                )
            }
             {blogs && (
                <>
                    <ul>
                        <li key={blogs.id} className="flex flex-col sm:flex-row py-16 items-center sm:items-start md:items-center gap-x-8 md:gap-x-16 gap-y-8 border-t-2 border-white border-y-2">
                            <BlogView blogs={blogs} />
                        </li>
                    </ul>
                    <div className="flex justify-center gap-x-6">
                        <button className="px-8 py-4 text-xl leading-6 rounded-[32px] bg-brand-1 focus-visible:bg-brand-2 hover:bg-brand-2 active:bg-brand-3 transition duration-300 ease-in-out">View More</button>
                        <button className="px-8 py-4 text-xl leading-6 rounded-[32px] text-white border-2 border-brand-1 focus-visible:text-brand-2 hover:text-brand-2 active:text-brand-3 transition duration-300 ease-in-out">Subscribe</button>
                    </div>
                </>
             )}
        </div>
    )
}

export default Blog