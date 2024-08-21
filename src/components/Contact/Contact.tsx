import Input from "../../ul/input"
import Mouse from "../../ul/mouse"
import send from "../../assets/social/send.svg"

const Contact = () => {
    return (
        <div className="flex pb-[63px] pt-32 flex-col justify-center items-center gap-y-16 bg-bg2">
            <div className="relative flex justify-center">
                <Mouse textCenter={true} serviceCard={{ title: "Contact", description: 'I’m currently available for freelance work' }}  />
            </div>
            <div>
                <p className="flex mb-16 text-[32px] leading-[42px] font-medium text-brand-1 border-4 border-brand-1 px-10 py-4 rounded-ss-[40px] rounded-ee-[40px]">Send me a message</p>
            </div>
            <div className="">
                <form className="flex flex-col justify-normal gap-y-16">
                    <div className="flex flex-wrap  justify-between gap-y-4">
                        <Input className="w-2/5" name="Your name *" placeholder="Enter your name" />
                        <Input className="w-2/5" name="Your email *" placeholder="Enter your email" />
                        <Input className="w-full" name="Yuour message *" placeholder="Enter your message" />
                    </div>
                    <button className="flex justify-center self-center items-center gap-x-4 text-[20px] leading-[24px] text-bg1 bg-brand-1 px-10 py-4 rounded-[40px]">Send Message<img className="w-[24px] h-[24px]" src={send} alt="" /></button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact