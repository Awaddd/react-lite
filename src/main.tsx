import Title from "./title";
import "./index.css";

function App() {
    return (
        <div>
            <Title />
            <div>Hello, World!</div>
        </div>
    );
}

document.querySelector("#app")?.append(<App />);