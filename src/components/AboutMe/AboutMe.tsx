// import lineBg from "../../assets/LineBg/LineBg.svg"
import aboutme from "../../assets/aboutme/aboutme.jpeg"
import Mouse from "../../ul/mouse"

const AboutMe = () => {
    return (
        <div className="flex flex-col py-32 bg-bg2 bg-about-bg bg-cover">
            <Mouse className="mb-32" />
            <div className="flex gap-x-32 justify-center items-center">
                <div className="flex flex-col items-start">
                    <p className="flex  mb-16 text-[64px] leading-[74px] text-white border-4 border-brand-1 px-10 py-4 rounded-ss-[40px] rounded-ee-[40px] bg-bg1">About me</p>
                    <div className="px-10 py-[58px] bg-bg1 rounded-[40px] max-w-[880px]">
                        <code className="text-sm leading-[18px] text-brand-1">{`<p>`}</code>
                            <div className="flex flex-col gap-y-2">
                                <p className="mb-2 text-[32px] leading-[42px] font-medium text-brand-1">Hello!</p>
                                <p className="text-base leading-5 text-white">My name is Sinan and I specialize in web developement that utilizes <span className="text-brand-1">HTML</span>, 
                                <span className="text-brand-1"> CSS</span>, 
                                <span className="text-brand-1"> JS</span>, and <span className="text-brand-1">REACT</span> etc.</p>
                                <p className="text-base leading-5 text-white">
                                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
                                <p className="text-base leading-5 text-white">When I'm not coding, I am <span className="text-brand-1">writing bolgs</span>, 
                                reading, or picking up some new hands-on art project like <span className="text-brand-1">photography</span>.</p>
                                <p className="text-base leading-5 text-white">I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                                </p>
                            </div>
                        <code className="text-sm leading-[18px] text-brand-1">{`</p>`}</code>
                    </div>
                </div>
                <div>
                    <img className="rounded-2xl" src={aboutme} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe

