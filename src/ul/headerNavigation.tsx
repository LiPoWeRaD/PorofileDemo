import { FC, useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "./logo"
import Contact from "./contact"
import InputSearch from "./inputSearch"


interface INavigation {
    name: string
    path: string
}

// text-brand-1

interface NavUnlistedProps {
    className?: string
}

const useHeaderNavigation: FC<INavigation[]> = ( navigation ) => {    
    
    const [search, setSearch] = useState(false)

    const NavUnlisted: FC<NavUnlistedProps> = ({ className }) => {
        return (
          <ul className={`flex gap-x-8 justify-between items-center text-base md:text-2xl ${className}`}>
            {navigation.map( ( nav, index ) => 
            <NavLink key={index} to={nav.path}  className={({ isActive }) => `${isActive ? "text-brand-1" : "text-white"}` + " focus-within:text-brand-2 hover:text-brand-2 active:text-brand-2 transition duration-300 ease-in-out"} >
                <li>{nav.name}</li>
            </NavLink> )}
          </ul>
        )
    }   


    
    return (
        <nav className={`container py-8 mx-auto ${search ? "gap-x-6" : "gap-x-[30px] md:gap-x-[109px]"} lg:gap-x-[109px] flex justify-between items-center`}>
            <Logo />
            <div className={`flex gap-x-16 items-center ${search ? "w-full" : "w-auto"} lg:w-auto`}>
                <NavUnlisted className={`${search ? "hidden" : "flex"} lg:flex`}/>
                <InputSearch className="w-full"  search={search} setSearch={setSearch}  />
                <ul className={`lg:flex gap-x-8 list-none hidden`}>
                    <Contact />
                </ul>
            </div>
        </nav>
    )
}

export default useHeaderNavigation