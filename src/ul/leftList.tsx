import { FC, ReactNode } from "react"

interface ILeftList {
    itemA: ReactNode[]
    itemB?: ReactNode[]
}

const LeftList: FC<ILeftList> = ({ itemA, itemB }) => {    
    // bg-white
    // fill-black
    // fill-white
    return (
        <>
            {itemA.map((item, index) => (
            <li id={`${item}-nav`} key={index} className="p-2  h-10 rounded-full nav-item  ">
                <a className="fill-white  hover:bg-gray-100 hover:fill-orange-700 active:bg-gray-200 active:fill-black transition-colors duration-300 ease-in-out" href={`#${item}`}>{itemB?.[index]}</a>
            </li>
        ))}
        </>
    )
}

export default LeftList