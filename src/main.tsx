import CartTotal from "./components/cart-total";
import Products from "./components/products";
import ShoppingCart from "./components/shopping-cart";
import "./index.css";

function App() {
    return (
        <div class="flex flex-col px-20 py-4">
            <CartTotal />
            <div className="grid grid-cols-2 gap-10">
                <Products />
                <ShoppingCart />
            </div>
        </div>
    );
}

document.querySelector("#app")?.append(<App />);
