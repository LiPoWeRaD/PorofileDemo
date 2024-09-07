import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import Search from "./svg/search"
import SearchList from "./searchList";


interface IInputSearch {
    search?: boolean,
    setSearch: Dispatch<SetStateAction<boolean>>;
    className?: string
}
const InputSearch: FC<IInputSearch> = ({search, setSearch, className}) => {
    const [searchCol, setSearchCol] = useState('')

    const handleSearch = () => {
        setSearch(!search)
      }

    //  при клике вне блока поиска - закрывает блок поиска и очищает инпут
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement && !e.target.closest('#search') || (e.target instanceof HTMLInputElement && e.target.closest('searchBlock'))) {
                setSearchCol('')
                setSearch(false)
                console.log('searchCol', searchCol);
                
            }
        }
        document.addEventListener('click', handleOutsideClick)
        return () => document.removeEventListener('click', handleOutsideClick)
    }, [search])

    return (
        <div id="search" className={`relative ${className}`}>
            <input
                id="searchInput"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchCol(e.target.value)}
                value={searchCol}
                className={`rounded-3xl bg-gray-06 px-4 w-full lg:w-[204px] ${search ? "flex" : "hidden"} lg:flex py-3 outline-none placeholder:text-gray-06`}
            />
            <button id="searchBtn" className="w-6 h-6 block absolute right-4 top-1/2 -translate-y-1/2" onClick={() => handleSearch()}><Search className={`${search ? "fill-black" : "fill-white"} lg:fill-black`} /></button>
            <SearchList id="searchBlock" search={searchCol} setSearch={setSearchCol} />
        </div>
    )
}

export default InputSearch