import Header from "./components/Header.jsx";
import CoreComp from "./components/CoreComp.jsx";
import { CORE_CONCEPTS } from "./data.js";
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
