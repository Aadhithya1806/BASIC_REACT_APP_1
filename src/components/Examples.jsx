import React from "react";
import { useState } from "react";
import { EXAMPLE_BTNS, EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
let tabContent = <p>Click a topic to study.</p>;

const Examples = () => {
    const [selectedValue, setSelectedValue] = useState(null);
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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {EXAMPLE_BTNS.map((item) => (
                    <TabButton
                        key={item}
                        isSelected={selectedValue === item}
                        onSelect={() => {
                            selectHandler(item);
                        }}
                    >
                        {item.toUpperCase()}
                    </TabButton>
                ))}
            </menu>
            {tabContent}
        </section>
    );
};

export default Examples;
