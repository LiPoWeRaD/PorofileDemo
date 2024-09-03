import NavAboutMe from "./svg/nav/navAboutMe"
import NavHeader from "./svg/nav/navHeader"
import NavSkills from "./svg/nav/navSkills"
import NavWorks from "./svg/nav/navWorks"
import NavBlogs from "./svg/nav/navBlogs"
import NavContact from "./svg/nav/navContact"
import { useEffect } from "react"
import LeftList from "./leftList"




const NavigationLeft = () => {

    useEffect(() => {
        const section = document.querySelectorAll("section");        
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.479
        }
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute("id")
                const nav = document.getElementById(`${id}-nav`)
                if (entry.isIntersecting) {
                    nav?.classList.add("bg-white")
                    nav?.classList.add("fill-black")
                    nav?.classList.remove("fill-white")
                } else {
                    nav?.classList.remove("bg-white")
                    nav?.classList.remove("fill-black")
                    nav?.classList.add("fill-white")
                }
            })
        }, options)
    
        section.forEach((section) => {
            observer.observe(section)
        })
    
        return () => {
            observer.disconnect()
        }
    }, [])  


    return (
        <ul className="fixed px-3 py-2 left-[5%] top-1/2 -translate-y-1/2 flex flex-col gap-y-6 border border-white rounded-[40px] bg-bg2">
            <LeftList itemA={['main', 'about', 'skills', 'works', 'blogs', 'contact']} itemB={[NavHeader(), NavAboutMe(), NavSkills(), NavWorks(), NavBlogs(), NavContact()]} />
        </ul>
    )
}

export default NavigationLeft