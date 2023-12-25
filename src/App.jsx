import { useState } from "react";
import Header from "./components/Header.jsx";
import CoreComp from "./components/CoreComp.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
let tabContent = "Please click a button!";
function App() {
    const [selectedValue, setSelectedValue] = useState(
        "Please click a button!"
    );
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
                        <CoreComp {...CORE_CONCEPTS[0]}></CoreComp>
                        <CoreComp {...CORE_CONCEPTS[1]}></CoreComp>

                        <CoreComp {...CORE_CONCEPTS[2]}></CoreComp>
                        <CoreComp {...CORE_CONCEPTS[3]}></CoreComp>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            onSelect={() => {
                                selectHandler("Components");
                            }}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            onSelect={() => {
                                selectHandler("States");
                            }}
                        >
                            States
                        </TabButton>
                        <TabButton
                            onSelect={() => {
                                selectHandler("Props");
                            }}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            onSelect={() => {
                                selectHandler("JSX");
                            }}
                        >
                            JSX
                        </TabButton>
                    </menu>
                </section>
            </main>
            {selectedValue}
        </div>
    );
}

export default App;
