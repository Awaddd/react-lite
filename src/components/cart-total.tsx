import { render } from "@/lib/render";
import cart from "@/state/cart";

export default function () {
    cart.subscribe(() => {
        render(document.getElementById("cart-total"), cart.total);
    });

    return (
        <div class="flex justify-between items-center mt-10 text-yellow-400 text-2xl font-semibold">
            <h2>Total</h2>
            <span>
                £<span id="cart-total">{cart.total}</span>
            </span>
        </div>
    );
}
