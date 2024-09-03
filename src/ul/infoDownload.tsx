import { FC } from "react"
import Download from "./svg/download"

interface IBlogs {
    text: string
    date: string
    read: string
}

const InfoDownload:FC<IBlogs> = ({text, date, read}) => {
    return (
        <div className="border-[#282f37] border-y-2 flex justify-around items-center">
            <div className="flex py-8  items-center gap-x-16 font-medium">
                <p>Text <span className="font-light">{text}</span></p>
                <p>Date <span className="font-light">{date}</span></p>
                <p>Read <span className="font-light">{read}</span></p>
            </div>
            <button className="fill-black p-3 bg-brand-1 rounded-full focus-visible:bg-brand-2 hover:bg-brand-2 active:bg-brand-3 transition-colors duration-300 ease-in-out">
                <Download />
            </button>
        </div>
    )
}

export default InfoDownload