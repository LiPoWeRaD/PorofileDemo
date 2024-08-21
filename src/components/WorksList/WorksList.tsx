import { useState } from "react"
import dual from "../../assets/works/Dual-screen.png"
import web from "../../assets/works/Web.png"
import site1 from "../../assets/works/site1.jpg"
import site2 from "../../assets/works/site2.jpg"
import mouse from "../../assets/works/mouse.svg"
import arrow from "../../assets/works/arrow.svg"



const WorksList = () => {
    const works = [
        {
            id: 1,
            img: site1,
            url: "https://lipoweradcinema.netlify.app/"
        },
        {
            id: 2,
            img: site2,
            url: "https://github.com/LiPoWeRaD/searchGit"
        }
    ]

    const [work, setWork] = useState(works[0])

    const changeNext = () => {
        // если следующая есть то переключаем, если нет то переключаем на первую
        if (work.id < works.length) {
            setWork(works[work.id])
        } else {
            setWork(works[0])
        }
    }

    const changePrev = () => {
        // если предыдущая есть то переключаем, если нет то переключаем на последнюю
        if (work.id > 1) {
            setWork(works[work.id - 2])
        } else {
            setWork(works[works.length - 1])
        }
    }

    
    return (
        <div className="flex gap-x-20">
            <button onClick={changePrev} className="self-center p-4 rounded-full bg-bg1"><img className="rotate-180" src={arrow} alt="" /></button>
            <div className="relative ">
                <button className="flex justify-end items-end gap-x-1 absolute top-16 right-32">
                    <a href={work.url} target="_blank" className="text-2xl text-brand-1 border-b-2 border-white">View Website</a>
                    <img src={mouse} alt="" />
                </button>
                <img src={dual} alt="" />
                <img className="absolute w-[212px] h-[278px] top-14 left-[8.6%]" src={web} alt="" />
                <img className="absolute w-[299px] h-[173px] top-[131px] right-[7.3%]" src={work.img} alt="" />
            </div>
            <button onClick={changeNext} className="self-center p-4 rounded-full bg-bg1"><img  src={arrow} alt="" /></button>
        </div>
    )
}

export default WorksList