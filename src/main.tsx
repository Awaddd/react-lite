import Title from "./title";
import "./index.css";
import ShoppingCart from "./components/shopping-cart";
import Products from "./components/products";

function App() {
    return (
        <div class="flex flex-col p-20">
            <Title />
            <Products />
            <ShoppingCart />
        </div>
    );
}

document.querySelector("#app")?.append(<App />);