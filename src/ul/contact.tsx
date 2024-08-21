import github from "../assets/social/github.svg"
import { FC } from "react"
import Instagram from "./svg/instagram"
import Discord from "./svg/discord"
import GitHub from "./svg/github"

interface IColor {
    className?: string
    text?: boolean
}

const Contact: FC<IColor> = ({ className = "flex justify-center items-center gap-x-2 text-white fill-brand-1", text=true }) => {
    return (
        <>
            <li><a href="/" className={className} >{<Instagram />}{text && <span>Instagram</span>}</a></li>
            <li><a href="/" className={className} >{<Discord />}{text && <span>Discord</span>}</a></li>
            <li><a href="/" className={className} ><GitHub />{text && <span>Github</span>}</a></li>
        </>
    )
}

export default Contact