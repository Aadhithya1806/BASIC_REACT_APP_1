import CoreComp from "./CoreComp.jsx";
import { CORE_CONCEPTS } from "../data.js";

import React from "react";

const CoreConcepts = () => {
    return (
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {CORE_CONCEPTS.map((coreComp) => (
                    <CoreComp key={coreComp.title} {...coreComp}></CoreComp>
                ))}
            </ul>
        </section>
    );
};

export default CoreConcepts;
