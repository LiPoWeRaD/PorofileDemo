import CardProfile from "../CardProfile/CardProfile"
import CodeProfile from "../CodeProfile/CodeProfile"


const Developer = () => {

    return (
        <div className="flex container pt-[70px] flex-col justify-evenly items-center">
            <h1 className="hidden md:block mb-16 text-[117px] leading-[134px] text-brand-2">Developer</h1>
            <div className="flex flex-col xl:flex-row mb-[128px] gap-x-24 gap-y-16 justify-between items-center ">
                <CardProfile />
                <CodeProfile />
            </div>
        </div>
    )

}

export default Developer