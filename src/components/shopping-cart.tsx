import { render } from "@/lib/render"
import CartItem from "./cart-item"
import cart from "@/state/cart"

export default function () {
    cart.subscribe(items => {
        render(
            document.getElementById("shopping-cart-items"),
            items.map((item, i) => <CartItem index={i} item={item} action="remove" />)
        )
    })

    return (
        <div class="mt-10 flex flex-col gap-4">
            <h1 class="text-gray-300 text-2xl font-semibold">Shopping Cart</h1>
            <div id="shopping-cart-items" class="flex flex-col gap-4" />
        </div>
    )
}
