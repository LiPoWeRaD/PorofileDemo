import { useState, useEffect } from "react"
import { useActions } from "../../hooks/useActions"
import { store } from "../../store"
import IBlogs from "../../types/IBlogs"
import Mouse from "../../ul/mouse"
import BlogView from "../../ul/blogView"


const Blogs = () => {
    const [blogs, setBlogs] = useState<IBlogs[] | undefined>()

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState<string | null>(null)

    const { fetchBlogs } = useActions()

    useEffect(() => {
        fetchBlogs()
    }, [])

    store.subscribe(() => {
        const state = store.getState()
        setBlogs(state.fetchBlogsReducer.blogs)
        setLoading(state.fetchBlogsReducer.loading)
        setError(state.fetchBlogsReducer.error)
    })
    

    return (
        <section className="bg-bg1 bg-blogs-bg bg-cover bg-no-repeat">
            <div className="flex flex-col gap-y-16 py-32 container mx-auto">
                <div className="relative mb-16 flex justify-center">
                    <Mouse icon={false} serviceCard={{ title: "Blogs", description: 'My thoughts on technology and business, welcome to subscribe' }} />
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
                    <button className="mx-auto px-8 py-4 text-xl leading-6 rounded-[32px] text-white border-2 border-brand-1 
                        focus-visible:bg-brand-1 hover:bg-brand-1 active:bg-brand-3 transition duration-300 ease-in-out outline-none">Subscribe My Blogs</button>
                    <ul className="flex flex-col gap-y-16">
                        {blogs.map((blog, index) => (
                            <li key={blog.id} className={`flex py-16  items-center gap-x-16 border-t-2 border-white${index === 1 ? "border-b-2" : ""}`}>
                                <BlogView blogs={blog} root/>
                            </li>
                        ))}
                    </ul>
                </>
             )}
            </div>
        </section>
    )
}

export default Blogs