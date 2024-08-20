import { Link } from "react-router-dom"
import headerNavigation from "../../ul/headerNavigation"


const Navigation = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Blogs",
        path: "/blogs"
    },
]

const Header = () => {
    return (
        <div className="bg-bg1">
            <div className="py-[20px]">
                {headerNavigation(Navigation)}
            </div>
        </div>
    )
}

export default Header