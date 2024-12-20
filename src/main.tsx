import Title from "./title";
import "./index.css";
import ShoppingCart from "./components/shopping-cart";
import Products from "./components/products";
import CartTotal from "./components/cart-total";

function App() {
    return (
        <div class="flex flex-col p-20">
            <Title />
            <CartTotal />
            <div className="grid grid-cols-2 gap-10">
                <Products />
                <ShoppingCart />
            </div>
        </div>
    );
}

document.querySelector("#app")?.append(<App />);