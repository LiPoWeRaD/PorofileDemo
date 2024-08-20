import AboutMe from "../../components/AboutMe/AboutMe"
import CardProfile from "../../components/CardProfile/CardProfile"
import CodeProfile from "../../components/CodeProfile/CodeProfile"


const Home = () => {

    return (
        <main>
            <section className="bg-bg1 bg-home-bg flex flex-col justify-center items-center ">
            <h1 className="mb-16 text-[117px] leading-[134px] text-brand-2">Developer</h1>
            <div className="flex mb-[128px] justify-center items-center gap-x-[128px]">
                <CardProfile />
                <CodeProfile />
            </div>
        </section>
        <section>
            <AboutMe />
        </section>
        </main>
    )
}

export default Home