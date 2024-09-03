import CardProfile from "../CardProfile/CardProfile"
import CodeProfile from "../CodeProfile/CodeProfile"


const Developer = () => {

    return (
        <div className="flex container pt-[70px] flex-col justify-evenly items-center">
            <h1 className="mb-16 text-[117px] leading-[134px] text-brand-2">Developer</h1>
            <div className="flex mb-[128px] gap-x-24 justify-between items-center ">
                <CardProfile />
                <CodeProfile />
            </div>
        </div>
    )

}

export default Developer