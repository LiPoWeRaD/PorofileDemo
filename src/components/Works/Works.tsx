import Mouse from "../../ul/mouse"
import WorksList from "../WorksList/WorksList"


const Works = () => {

    return (
        <div className="flex flex-col py-32 container mx-auto">
             <div className="relative mb-16 flex justify-center">
                <Mouse serviceCard={{ title: "Works", description: 'I had the pleasure of working with these awesome projects' }} />
             </div>
             <div className="flex justify-center items-center">
                <WorksList />
             </div>
        </div>

    )
}

export default Works