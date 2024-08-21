import blog from "../../assets/blogs/blogs.jpeg"
import Mouse from "../../ul/mouse"

const Blogs = () => {
    return (
        <div className="flex flex-col gap-y-16 py-32 bg-bg1">
             <div className="relative mb-[90px] flex justify-center">
                <Mouse serviceCard={{ title: "Blogs", description: 'My thoughts on technology and business, welcome to subscribe' }} />
             </div>
             <div className="flex py-16 justify-center items-center gap-x-16 border-y-2 border-white">
                <img src={blog} alt="" />
                <div className="flex flex-col justify-start items-start gap-y-6">
                    <p className="text-[32px] leading-[36px] text-brand-1">What does it take to become a web developer?</p>
                    <p className="text-base leading-[18px] text-white">Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</p>
                    <button className="text-base leading-[18px] text-brand-1"><span className="border-b border-white">Read More</span> {">>"}</button>
                    <ul className="flex gap-x-6 items-center text-sm leading-4 text-white">
                        <li className="px-2 py-1 rounded-full bg-grey">Web Developer</li>
                        <li><span className="font-medium">Text</span> Sinan</li>
                        <li><span className="font-medium">Date</span> 10.Oct 2023</li>
                        <li><span className="font-medium">Read</span> 1 Min</li>
                    </ul>
                </div>
             </div>
             <div className="flex justify-center gap-x-6">
                <button className="px-8 py-4 text-xl leading-6 rounded-[32px] bg-brand-1">View More</button>
                <button className="px-8 py-4 text-xl leading-6 rounded-[32px] text-white border-2 border-brand-1">Subscribe</button>
             </div>
        </div>
    )
}

export default Blogs