import github from "../assets/social/github.svg"
import { FC } from "react"
import Instagram from "./svg/instagram"
import Discord from "./svg/discord"
import GitHub from "./svg/github"

interface IColor {
    className?: string
    text?: boolean
}

const Contact: FC<IColor> = ({ className = "flex justify-center items-center text-base leading-5 gap-x-2 text-white fill-brand-1", text=true }) => {
    return (
        <>
            <li><a href="/" className={className} >{<Instagram />}{text && <span className="hidden 2xl:block">Instagram</span>}</a></li>
            <li><a href="/" className={className} >{<Discord />}{text && <span className="hidden 2xl:block">Discord</span>}</a></li>
            <li><a href="/" className={className} ><GitHub />{text && <span className="hidden 2xl:block">Github</span>}</a></li>
        </>
    )
}

export default Contact