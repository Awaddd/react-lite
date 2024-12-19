import Title from "./title";

function App() {
    return (
        <div>
            <Title />
            <div>Hello, World!</div>
        </div>
    );
}

document.querySelector("#app")?.append(<App />);