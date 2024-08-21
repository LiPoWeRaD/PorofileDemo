import { FC } from "react"
import { Link } from "react-router-dom"
import Logo from "./logo"
import InputSearch from "./inputSearch"
import Contact from "./contact"


interface INavigation {
    name: string
    path: string
}



const headerNavigation: FC<INavigation[]> = ( navigation ) => {
    const handleSelect = ( index: number ) => () => {
        const li = document.getElementsByClassName("header-li")

        Array.from(li).forEach( ( li, i ) => {
            if ( i === index ) {
                li.classList.add("text-brand-1")
            } else {
                li.classList.remove("text-brand-1")
            }
        } )
    }

    return (
        <nav className="container mx-auto flex justify-between">
            <Logo />
            <ul className="flex py-16 gap-x-8 justify-between items-center text-2xl ">
                { navigation.map( ( nav, index ) => <li onClick={handleSelect(index)} className="header-li text-white" key={ index }><Link to={ nav.path }>{ nav.name }</Link></li> ) }
                <li className="mx-8">{<InputSearch />}</li>
                <Contact />
            </ul>
        </nav>
    )
}

export default headerNavigation