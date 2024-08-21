import Contact from "../../ul/contact"



const Footer = () => {

    return (
        <div className="bg-bg2 text-white border-t border-grey">
            <div className="flex mx-auto flex-wrap container justify-between items-center py-4">
                <p>© 2023 SinanTokmak. All rights reserved.</p>
                <div className="flex gap-x-7">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <ul className="flex gap-x-8">
                    <Contact className="flex p-2 rounded-full bg-brand-2 fill-bg1" text={false}   />
                </ul>
                <p>Design By <span className="text-brand-1 border-b border-brand-1">JohannLeon</span></p>
            </div>
        </div>
    )

}

export default Footer