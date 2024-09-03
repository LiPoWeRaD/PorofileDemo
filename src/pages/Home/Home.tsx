import AboutMe from "../../components/AboutMe/AboutMe"
import CardProfile from "../../components/CardProfile/CardProfile"
import CodeProfile from "../../components/CodeProfile/CodeProfile"
import Skills from "../../components/Skills"
import Works from "../../components/Works/Works"
import Blog from "../../components/Blog/Blog"
import Contact from "../../components/Contact/Contact"
import Developer from "../../components/Developer/Developer"
import NavigationLeft from "../../ul/navigationLeft"


const Home = () => {


    return (
        <main className="font-ibm">
            <NavigationLeft />
            <section id="main" className="bg-bg1 bg-home-bg ">
                <Developer />
            </section>
            <section id="about" className="bg-bg2 bg-about-bg bg-cover">
                <AboutMe />
            </section>
            <section id="skills" className="bg-bg2 bg-skills-bg bg-cover bg-no-repeat">
                <Skills />
            </section>
            <section id="works" className="bg-bg2 bg-works-bg">
                <Works />
            </section>
            <section id="blogs" className="bg-bg1">
                <Blog />
            </section>
            <section id="contact" className="bg-bg2">
                <Contact />
            </section>
        </main>
    )
}

export default Home