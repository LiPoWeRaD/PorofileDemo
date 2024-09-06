import Mouse from "../../ul/mouse"
import ServicesCard from "../../ul/ServicesCard"
import CodeCard from "../../ul/CodeCard"
import line2 from "../../assets/line/Line2.svg"
import monitor from "../../assets/monitor/monitor.svg"
import smartphone from "../../assets/smartphone/smartphone.svg"
import html from "../../assets/skills/html.jpeg"
import css from "../../assets/skills/css.jpeg"
import js from "../../assets/skills/js.jpeg"
import react from "../../assets/skills/react.jpeg"
import Html from "../../ul/svg/lang/html"
import Css from "../../ul/svg/lang/css"
import Js from "../../ul/svg/lang/js"
import React from "../../ul/svg/lang/react"


// text-html text-css text-js text-react bg-html bg-css bg-js bg-react
const Skills = () => {
    return (
        <div className="flex flex-col py-32 container mx-auto">
            <div className="relative mb-16 flex gap-x-32 xl:gap-x-64 justify-center">
                <Mouse serviceCard={{ title: "Skills", description: 'I am striving to never stop learning and improving' }} />
                <code className="absolute hidden md:block ml-[80%] xl:ml-[40%] text-[168px] leading-[193px] text-brand-1">{`</>`}</code>
            </div>
            <div className="flex flex-col md:flex-col mb-[90px] justify-center items-center gap-x-36 gap-y-8">
                <ServicesCard icon={monitor} title={"web developement"} description={["HTML", "·", "CSS", "·", "JS", "·", "REACT"]} />
                <ServicesCard icon={smartphone} title={"App developement"} description={["IOS", "·", "Android"]} />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-32 gap-y-8">
                <CodeCard title="HTML" imageSvg={<Html />} color="html" />
                <CodeCard title="CSS" imageSvg={<Css />} color="css" />
                <CodeCard title="JS" imageSvg={<Js />} color="js" />
                <CodeCard title="REACT" imageSvg={<React />} color="react" />
            </div>
        </div>
    )
}

export default Skills