import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/" className="flex items-center gap-x-2 text-[32px] leading-[42px] text-white outline-none">
            <p className="text-brand-1">{"<C/>"}</p>
            <p>SinanTokmak</p>
        </NavLink>
    )
};

export default Logo;