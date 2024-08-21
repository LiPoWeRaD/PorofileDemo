import { FC } from "react"


interface IInput {
    className?: string
    name: string
    placeholder: string
}

const Input:FC<IInput> = ({name, placeholder, className}) => {

    return (
        <label className={`${className} flex flex-col gap-y-6`}>
            <p className="text-base leading-[18px] text-brand-1">{name}</p>
            <input type="text" placeholder={placeholder} className="text-white bg-transparent border-b border-brand-1 w-full" />
        </label>
    )
}

export default Input