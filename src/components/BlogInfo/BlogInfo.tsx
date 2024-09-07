import { useParams } from "react-router-dom"
import { useActions } from "../../hooks/useActions"
import { useEffect, useState } from "react"
import IBlogs from "../../types/IBlogs"
import { store } from "../../store"
import blogImg from "../../assets/blogs/blogs.jpeg"
import InfoDownload from "../../ul/infoDownload"
import BlogView from "../../ul/blogView"


const BlogInfo = () => {

    const { id } = useParams()    

    const [blog, setBlog] = useState<IBlogs | undefined>()

    const [blogs, setBlogs] = useState<IBlogs[] | undefined>()
    
    const [loading, setLoading] = useState(false)

    const [loadingBlogs, setLoadingBlogs] = useState(false)

    const [error, setError] = useState<string | null>(null)

    const [errorBlogs, setErrorBlogs] = useState<string | null>(null)

    const { fetchBlog, fetchBlogs } = useActions()

    useEffect(() => {
        fetchBlog(Number(id))
        fetchBlogs()
    }, [id])

    store.subscribe(() => {
        const state = store.getState()
        setBlog(state.fetchBlogReducer.blog)
        setLoading(state.fetchBlogReducer.loading)
        setError(state.fetchBlogReducer.error)

        setBlogs(state.fetchBlogsReducer.blogs)
        setLoadingBlogs(state.fetchBlogsReducer.loading)
        setErrorBlogs(state.fetchBlogsReducer.error)
    })    

    return (
        <>
            <section className="bg-bg1 bg-blogs-bg bg-cover bg-no-repeat">
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
            {blog && (
                <div className="flex flex-col mx-auto gap-y-16 py-32 container text-white max-w-[720px]">
                    <h2 className="flex gap-y-4 flex-col justify-center items-center text-[32px] leading-[36px] text-brand-1">{blog.title}</h2>
                    <div className="border-gray-600 border-y">
                        <InfoDownload text={blog.text} date={blog.date} read={blog.read} />
                    </div>
                    <img className="h-[400px] bg-gray-600" src={blog.image} alt="" />
                    <div className="flex flex-col gap-y-8">
                        <ul className="">
                            <li key={blog.content[0][1]}>{blog.content[0][1]}</li>
                            {Object.keys(blog.content).map((key, index) => (
                            index !== 0 && (
                                <li key={index}>
                                    <h3 className="my-10 text-lg text-brand-1">{blog.content[index][0]}:</h3>
                                    <p key={index}>{blog.content[index][1]}</p>
                                </li>
                                ))
                            )
                        }
                        </ul>
                        <ul className="flex flex-wrap gap-6 items-center text-sm leading-4 text-white">
                            {blog.professional.map((professional, index) => (
                                <li key={index} className="px-2 py-1 rounded-full bg-grey">{professional}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="border-gray-600 border-y">
                        <InfoDownload text={blog.text} date={blog.date} read={blog.read} />
                    </div>
                    <button className="mx-auto px-8 py-4 text-xl leading-6 rounded-[32px] text-white border-2 border-brand-1 focus-visible:bg-brand-1 hover:bg-brand-1 active:bg-brand-2 transition-colors duration-300 ease-in-out">Subscribe My Blogs</button>
                </div>
            )}
            </section>
            <section className="bg-bg1 bg-blogs-bg bg-cover bg-no-repeat">
                <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px] text-brand-1">You might also like</h2>
                {loadingBlogs && (
                    <div className="flex flex-col gap-y-16 py-32 container mx-auto">
                        <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px]">Loading...</h2>
                    </div>
                )}
                {errorBlogs && (
                    <div className="flex flex-col gap-y-16 py-32 container mx-auto">
                        <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px] text-red-500">{error}</h2>
                    </div>
                )}
                {blogs && (
                    <>
                        <div className="flex flex-col mx-auto gap-y-16 py-32 container text-white max-w-[1062px]">
                            <ul className="flex flex-col ">
                                {blogs.filter((blog) => Number(blog.id) !== Number(id)).map((blog, index) => (
                                    index < 3 && (
                                        <li key={index} className={`flex py-16 gap-x-16 ${index === 2 ? "border-y-2" : "border-t-2"} border-white`}>
                                        <BlogView blogs={blog} />
                                        
                                    </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </section>
        </>
    )
}

export default BlogInfo