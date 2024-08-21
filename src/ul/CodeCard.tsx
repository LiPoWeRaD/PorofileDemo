import { FC } from "react"


interface ICodeCard {
    title: string
    image?: string
    color?: string
}

const CodeCard:FC<ICodeCard> = ({title, image, color}) => {
    return (
        <div className={`flex flex-col items-center gap-y-6 text-${color}`}>
            <img className="w-[144px] h-[144px] rounded-[80px]" src={image} alt="" />
            <h3 className="text-[32px] leading-[42px] font-medium">{title}</h3>
        </div>
    )
}

export default CodeCard