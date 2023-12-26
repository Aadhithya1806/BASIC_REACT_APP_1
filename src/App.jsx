import { useState } from "react";
import Header from "./components/Header.jsx";
import CoreComp from "./components/CoreComp.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
let tabContent = "Please click a button!";
function App() {
    const [selectedValue, setSelectedValue] = useState(null);
    let tabContent = <p>Click a topic to study.</p>;
    if (selectedValue) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedValue].title}</h3>
                <p>{EXAMPLES[selectedValue].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedValue].code}</code>
                </pre>
            </div>
        );
    }
    function selectHandler(selectedBtn) {
        setSelectedValue(selectedBtn);
        console.log(selectedValue);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {CORE_CONCEPTS.map((coreComp) => (
                            <CoreComp
                                key={coreComp.title}
                                {...coreComp}
                            ></CoreComp>
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            isSelected={selectedValue === "components"}
                            onSelect={() => {
                                selectHandler("components");
                            }}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedValue === "state"}
                            onSelect={() => {
                                selectHandler("state");
                            }}
                        >
                            States
                        </TabButton>
                        <TabButton
                            isSelected={selectedValue === "props"}
                            onSelect={() => {
                                selectHandler("props");
                            }}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedValue === "jsx"}
                            onSelect={() => {
                                selectHandler("jsx");
                            }}
                        >
                            JSX
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
