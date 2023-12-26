import Header from "./components/HEADER/Header.jsx";
import CoreConcepts from "./components/MAIN/CoreConcepts.jsx";
import Examples from "./components/MAIN/Examples.jsx";
function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConcepts />
                <Examples></Examples>
            </main>
        </div>
    );
}

export default App;
