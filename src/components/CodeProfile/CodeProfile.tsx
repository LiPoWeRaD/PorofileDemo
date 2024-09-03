import mail from "../../assets/social/mail.svg"

const CodeProfile = () => {
    return (
        <div className="flex gap-x-[74px] items-center">
            <div className="p-5 flex flex-col max-w-[700px] text-white w-full h-full text-[64px] leading-[72px]">
            <code className="text-sm text-brand-1">{`<h1>`}</code>
            <p className="ml-4">Hey</p>
            <p className="ml-4">I’m <span className="text-brand-1">Sinan</span>,</p>
            <p className="flex items-end ml-4 mb-8 gap-x-4">Full-stack developer<code className="text-sm text-brand-1">{`</h1>`}</code></p>
            <code className="text-sm text-brand-1">{`<p>`}</code>
            <p className="ml-4 text-base">I help business grow by crafting amazing web experiences. 
                If you’re looking for a developer that likes to get stuff done,</p>
            <code className="mb-4 text-sm text-brand-1">{`</p>`}</code>
            <p className="flex gap-x-4 items-center ml-4 text-[32px] leading-[42px] font-medium text-brand-1">Let’s talk<img className="p-2 bg-grey rounded-[40px] w-8 h-8" src={mail} alt="" /></p>
        </div>
        <div className="flex flex-col gap-y-12 px-8 py-12 bg-bg2 rounded-[80px]">
            <p className="flex gap-x-4 items-center text-5xl leading-[62px] font-medium text-brand-1">4 <span className="text-base leading-5 font-normal text-white">Programming<br />Language</span></p>
            <p className="flex gap-x-4 items-center text-5xl leading-[62px] font-medium text-brand-1">6 <span className="text-base leading-5 font-normal text-white">Development<br />Tools</span></p>
            <p className="flex gap-x-4 items-center text-5xl leading-[62px] font-medium text-brand-1">8 <span className="text-base leading-5 font-normal text-white">Years of<br />Experience</span></p>
        </div>
        </div>
    )
}

export default CodeProfile