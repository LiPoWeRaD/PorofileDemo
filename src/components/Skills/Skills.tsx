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


// text-html
// text-css
// text-js
// text-react
const Skills = () => {
    return (
        <div className="flex flex-col py-32 bg-bg2 bg-skills-bg bg-cover bg-no-repeat">
            <div className="relative mb-16 flex gap-x-32 justify-center">
                <Mouse serviceCard={{ title: "Skills", description: 'I am striving to never stop learning and improving' }} />
                <code className="absolute ml-[40%] text-[168px] leading-[193px] text-brand-1">{`</>`}</code>
            </div>
            <div className="flex mb-[90px] justify-center items-center gap-x-32">
                <ServicesCard icon={monitor} title={"web developement"} description={["HTML", "·", "CSS", "·", "JS", "·", "REACT"]} />
                <ServicesCard icon={smartphone} title={"App developement"} description={["IOS", "·", "Android"]} />
            </div>
            <div className="flex justify-center items-center gap-x-32">
                <CodeCard title="HTML" image={html} color="html" />
                <CodeCard title="CSS" image={css} color="css" />
                <CodeCard title="JS" image={js} color="js" />
                <CodeCard title="REACT" image={react} color="react" />
            </div>
        </div>
    )
}

export default Skills