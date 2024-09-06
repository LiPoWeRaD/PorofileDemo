import { FC, ReactNode } from "react"


interface ICodeCard {
    title: string
    imageSvg?: ReactNode
    color?: string
}

const CodeCard:FC<ICodeCard> = ({title, imageSvg, color}) => {
    return (
        <div className={`flex flex-col items-center gap-y-6 text-${color} flex-grow-0 flex-shrink-0 lg:flex-shrink basis-1/4 lg:basis-0`}>
            {/* <img className="w-[144px] h-[144px] rounded-full" src={image} alt="" /> */}
            <p className={`p-12  bg-${color} rounded-full`}>{imageSvg}</p>
            <h3 className="text-[32px] leading-[42px] font-medium">{title}</h3>
        </div>
    )
}

export default CodeCard