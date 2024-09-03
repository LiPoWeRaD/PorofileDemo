import { useEffect, useState } from "react"
import dual from "../../assets/works/Dual-screen.png"
import web from "../../assets/works/Web.png"
import mouse from "../../assets/works/mouse.svg"
import arrow from "../../assets/works/arrow.svg"
import IWorks from "../../types/IWorks"
import { useActions } from "../../hooks/useActions"
import { store } from "../../store"


const WorksList = () => {
    const worksUndefined = [
        {
            id: 1,
            img: dual,
            url: "https://lipoweradcinema.netlify.app/"
        }
    ]

    const [works, setWorks] = useState<IWorks[] | undefined>([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState<string | null>(null)


    const { fetchSites } = useActions()

    useEffect(() => {
        fetchSites()
    }, [])

    store.subscribe(() => {
        const state = store.getState()
        setWorks(state.fetchSitesReducer.sites)
        setLoading(state.fetchSitesReducer.loading)
        setError(state.fetchSitesReducer.error)
    })




    const [work, setWork] = useState(works?.[0] || worksUndefined[0])

    useEffect(() => {
        setWork(works?.[0] || worksUndefined[0])
    }, [works])

    const changeNext = () => {
        if (works !== undefined) {
          const worksLength = works.length;
            if (work.id < worksLength) {
              setWork(works[work.id]);
            } else {
              setWork(works[0]);
            }
        }
      }

    const changePrev = () => {
        if (works !== undefined) {
                const worksLength = works.length;
            if (work.id > 1) {
                setWork(works[work.id - 2])
            } else {
                setWork(works[worksLength - 1])
            }
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px] text-red-500">{error}</h2>
        )
    }
  
    
    return (
        <div className="flex gap-x-20">
            <button onClick={changePrev} className="self-center p-4 rounded-full bg-bg1 focus-within:bg-gray-800 hover:bg-gray-800 active:bg-gray-600 transition duration-300 ease-in-out"><img className="rotate-180" src={arrow} alt="" /></button>
            <div className="relative ">
                <div className="flex justify-end items-end gap-x-1 absolute top-16 right-32">
                    <a href={work.url} target="_blank" rel="noreferrer" className="text-2xl text-brand-1 border-b-2 outline-none
                        border-white focus-within:border-brand-1 focus-within:text-brand-1 hover:text-brand-2 hover:border-brand-2 active:text-brand-2 active:border-brand-2 transition duration-300 ease-in-out">View Website</a>
                    <img src={mouse} alt="" />
                </div>
                <img src={dual} alt="" />
                <img className="absolute w-[212px] h-[278px] top-14 left-[8.6%]" src={web} alt="" />
                <img className="absolute w-[299px] h-[173px] top-[131px] right-[7.3%]" src={work.img} alt="" />
            </div>
            <button onClick={changeNext} className="self-center p-4 rounded-full bg-bg1 focus-within:bg-gray-800 hover:bg-gray-800 active:bg-gray-600 transition duration-300 ease-in-out"><img  src={arrow} alt="" /></button>
        </div>
    )
}

export default WorksList