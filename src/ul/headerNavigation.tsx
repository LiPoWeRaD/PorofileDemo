import { FC } from "react"
import { NavLink } from "react-router-dom"
import Logo from "./logo"


interface INavigation {
    name: string
    path: string
}

// text-brand-1

const useHeaderNavigation: FC<INavigation[]> = ( navigation ) => {    
    const NavUnlisted = () => {
        return (
          <ul className="flex py-16 gap-x-8 justify-between items-center text-2xl ">
            {navigation.map( ( nav, index ) => 
            <NavLink key={index} to={nav.path}  className={({ isActive }) => `${isActive ? "text-brand-1" : "text-white"}` + " focus-within:text-brand-2 hover:text-brand-2 active:text-brand-2 transition duration-300 ease-in-out"} >
                <li>{nav.name}</li>
            </NavLink> )}
          </ul>
        )
    }   

    return (
        <nav className="container mx-auto xl:gap-x-[109px] flex justify-between">
            <Logo />
            {<NavUnlisted />}
        </nav>
    )
}

export default useHeaderNavigation