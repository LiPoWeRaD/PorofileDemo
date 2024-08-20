import mouse from "../assets/mouse/mouse.svg"
import line from "../assets/line/Line.svg"
import { FC } from "react"

interface IMouse {
    className?: string
}

const Mouse:FC<IMouse> = (className) => {
    return (
        <div className={`flex flex-col justify-center items-center ${className.className}` }>
            <img src={mouse} alt="" />
            <img src={line} alt="" />
        </div>    )
}
export default Mouse