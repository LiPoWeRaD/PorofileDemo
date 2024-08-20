import profile from "../../assets/Profile/Profile.jpeg"
import email from "../../assets/social/mail.svg"
import map from "../../assets/social/map.svg"
import briefcase from "../../assets/social/briefcase.svg"
import link from "../../assets/social/link.svg"
import download from "../../assets/download/download.svg"

const CardProfile = () => {
    return (
        <div>
                <div className=" border-2 border-r-0 border-b-0 border-brand-1 rounded-ss-[160px] rounded-ee-[160px] ">
                    <div className="flex flex-col items-center pt-9 px-9 text-sm border-2 border-white text-white rounded-ss-[160px] rounded-ee-[160px]">
                        <img className="h-24 w-24 rounded-[64px]" src={profile} alt="" />
                        <p className="text-[32px] leading-[42px] font-medium">Sinan</p>
                        <p className="pb-8">Full-stack developer</p>
                        <div className="flex flex-col justify-start items-start gap-y-4">
                            <p className="flex gap-x-4"><img src={email} alt="" />abdurrahman_sinan@hotmail.com</p>
                            <p className="flex gap-x-4"><img src={map} alt="" />Turkey</p>
                            <p className="flex gap-x-4"><img src={briefcase} alt="" />Full-time / Freelancer</p>
                            <p className="flex gap-x-4"><img src={link} alt="" />www.sinantokmak.com</p>
                            <div className="flex mb-8 gap-x-4 text-bg1">
                                <p className="px-2 bg-brand-1 rounded-lg">HTML</p>
                                <p className="px-2 bg-brand-1 rounded-lg">CSS</p>
                                <p className="px-2 bg-brand-1 rounded-lg">JS</p>
                                <p className="px-2 bg-brand-1 rounded-lg">REACT</p>
                            </div>
                            <button className="flex mb-[37px] py-4 px-8 justify-center items-center gap-x-2 rounded-[32px] text-[20px] text-bg1 bg-white">Download CV <img src={download} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CardProfile