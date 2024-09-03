import { FC } from "react"
// import blog from "../assets/blogs/blogs.jpeg"
import IBlogs from "../types/IBlogs"
import { NavLink } from "react-router-dom"

interface BlogViewProps  {
    blogs: IBlogs
    root?: boolean
}

// text-brand-1
const BlogView:FC<BlogViewProps> = ({blogs, root=false}) => {    
    const navChange = (root?: boolean) => {
        if (root) {
            return <NavLink to={`${blogs.id}`} className="text-base leading-[18px] text-brand-1"><span className="border-b border-white 
                focus-visible:border-white hover:border-brand-1 active:border-brand-1 transition-colors duration-300 ease-in-out">Read More</span> {">>"}</NavLink>
        } else {
            return <NavLink to={`/blogs/${blogs.id}`} className="text-base leading-[18px] text-brand-1"><span className="border-b border-white 
                focus-visible:border-white hover:border-brand-1 active:border-brand-1 transition-colors duration-300 ease-in-out">Read More</span> {">>"}</NavLink>
        }
    }
      
    return (
        <>
            <img className="w-60 h-60 bg-gray-600" src={blogs.image} alt="" />
            <div className="flex flex-col justify-start items-start gap-y-6">
                <p className="text-[32px] leading-[36px] text-brand-1">{blogs.title}</p>
                <p className="text-base leading-[18px] text-white">{blogs.content[0][1].substring(0, 250)}…</p>
                {navChange(root)}

                <ul className="flex gap-x-6 items-center text-sm leading-4 text-white">
                    <li className="px-2 py-1 rounded-full bg-grey">{blogs.professional[0]}</li>
                    <li><span className="font-medium">Text </span>{blogs.text}</li>
                    <li><span className="font-medium">Date </span>{blogs.date}</li>
                    <li><span className="font-medium">Read </span>{blogs.read}</li>
                </ul>
            </div>
        </>
    )
}

export default BlogView