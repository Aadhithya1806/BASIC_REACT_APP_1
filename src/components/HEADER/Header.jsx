import imgPath from "../assets/react-core-concepts.png";
import "./Header.css";
const words = ["Fundamental", "Core", "Crucial"];
function getDesc(max) {
    return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
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
