import imgPath from "./assets/react-core-concepts.png";
const words = ["Fundamental", "Core", "Crucial"];
import componentsImg from "./assets/components.png";
function getDesc(max) {
    return Math.floor(Math.random() * (max + 1));
}

function CoreComp(props) {
    return (
        <li>
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </li>
    );
}

function Header() {
    const description = words[getDesc(2)];
    return (
        <header>
            <img src={imgPath} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app
                you are going to build!
            </p>
        </header>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreComp
                            title="Components"
                            img={componentsImg}
                            desc="This is the basic concept for learning react"
                        ></CoreComp>
                        <CoreComp
                            title="Props"
                            img={componentsImg}
                            desc="This is the basic concept for learning react"
                        ></CoreComp>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
