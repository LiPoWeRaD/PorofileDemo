import mouse from "../assets/mouse/mouse.svg"
import line from "../assets/line/Line.svg"
import line2 from "../assets/line/Line2.svg"
import { FC } from "react"

interface IServicesCard {
    title: string
    description: string
}

interface IMouse {
    className?: string
    icon?: boolean
    textCenter?: boolean
    serviceCard?: IServicesCard
}

const Mouse:FC<IMouse> = ({className, serviceCard, textCenter, icon = true}) => {
    
    return (
        <div className="flex flex-col gap-y-16">
            {icon && (
                <div className={`flex flex-col justify-center items-center ${className}` }>
                    <img src={mouse} alt="" />
                    <img src={line} alt="" />
                </div>
            )}    
            {serviceCard?.description !== undefined && <div className="flex flex-col justify-center items-center gap-y-4">
                <h2 className="flex gap-y-4 flex-col justify-center items-center text-[64px] leading-[72px] text-brand-1">{serviceCard.title}<img className="w-full" src={line2} alt="" /></h2>
                <p className={`${textCenter ? "" : "ml-36"} text-base leading-5 text-white`}>{serviceCard.description}</p>
            </div>}
        </div>
        )
}
export default Mouse