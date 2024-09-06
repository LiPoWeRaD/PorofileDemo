import { Dispatch, FC, SetStateAction } from "react"
import Search from "./svg/search"


interface IInputSearch {
    search?: boolean,
    setSearch: Dispatch<SetStateAction<boolean>>;
    className?: string
}
const InputSearch: FC<IInputSearch> = ({search, setSearch, className}) => {

    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                className={`rounded-3xl bg-gray-06 px-4 w-full lg:w-[204px] ${search ? "flex" : "hidden"} lg:flex py-3 outline-none placeholder:text-gray-06`}
            />
            <button className="w-6 h-6 block absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setSearch(!search)}><Search className={`${search ? "fill-black" : "fill-white"} lg:fill-black`} /></button>
        </div>
    )
}

export default InputSearch