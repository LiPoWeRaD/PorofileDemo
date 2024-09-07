import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/" className="flex items-center gap-x-2 text-base leading-[20px] md:text-[32px] md:leading-[42px] text-white outline-none">
            <p className="text-brand-1">{"<C/>"}</p>
            <p>SinanTokmak</p>
        </NavLink>
    )
};

export default Logo;