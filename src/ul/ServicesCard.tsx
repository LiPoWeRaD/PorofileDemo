import { FC } from "react"


interface IServicesCard {
    icon: string
    title: string
    description: string[]
}

const ServicesCard:FC<IServicesCard> = ({icon, title, description}) => {

    return (
        <div className="flex flex-col items-center gap-y-2 bg-brand-1 max-w-[288px] px-8 py-4 rounded-lg border-l-8 border-css">
            <img className="w-8 h-8" src={icon} alt="" />
            <h3 className="text-2xl leading-8 font-medium">{title}</h3>
            <ul className="flex gap-x-1 text-base leading-5">{description.map((desc, index) => <li key={index}>{desc}</li>)}</ul>
        </div>
    )
}

export default ServicesCard