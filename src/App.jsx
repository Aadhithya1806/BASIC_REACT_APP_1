import imgPath from "./assets/react-core-concepts.png";
const words = ["Fundamental", "Core", "Crucial"];
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

function getDesc(max) {
    return Math.floor(Math.random() * (max + 1));
}
let chumma = { ...CORE_CONCEPTS };
function CoreComp({ img, title, desc }) {
    return (
        <li>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
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
    console.log({ ...CORE_CONCEPTS[0] });
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreComp {...CORE_CONCEPTS[0]}></CoreComp>
                        <CoreComp {...CORE_CONCEPTS[1]}></CoreComp>

                        <CoreComp {...CORE_CONCEPTS[2]}></CoreComp>
                        <CoreComp {...CORE_CONCEPTS[3]}></CoreComp>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
