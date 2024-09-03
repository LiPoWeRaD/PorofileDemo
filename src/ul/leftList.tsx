import { FC, ReactNode } from "react"

interface ILeftList {
    itemA: ReactNode[]
    itemB?: ReactNode[]
}

const LeftList: FC<ILeftList> = ({ itemA, itemB }) => {    
    return (
        <>
            {itemA.map((item, index) => (
            <li id={`${item}-nav`} key={index} className="p-2 fill-white h-10 rounded-full transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:fill-black active:bg-gray-200 active:fill-black">
                <a href={`#${item}`}>{itemB?.[index]}</a>
            </li>
        ))}
        </>
    )
}

export default LeftList