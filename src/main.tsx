import CartTotal from "./components/cart-total";
import Products from "./components/products";
import ShoppingCart from "./components/shopping-cart";
import "./index.css";

function App() {
    return (
        <div class="flex flex-col p-20">
            <h1 class="text-4xl font-bold text-green-300">JS Framework</h1>
            <CartTotal />
            <div className="grid grid-cols-2 gap-10">
                <Products />
                <ShoppingCart />
            </div>
        </div>
    );
}

document.querySelector("#app")?.append(<App />);
