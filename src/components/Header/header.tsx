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
        <div className="font-ibm bg-bg1">
            <div className="xl:container">
                {headerNavigation(Navigation)}
            </div>
        </div>
    )
}

export default Header