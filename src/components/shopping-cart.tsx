import CartItem from "./cart-item"
import cart from "@/state/cart"

export default function () {
    cart.subscribe(items => {
        console.log("items", items)
        const el = document.getElementById("shopping-cart-items")
        if (!el) return

        const content = items.map((item, i) => <CartItem index={i} item={item} action="remove" />)
        el.innerHTML = ""
        el.append(...content)
    })

    return (
        <div class="mt-10 flex flex-col gap-4">
            <h1 class="text-gray-300 text-2xl font-semibold">Shopping Cart</h1>
            <div id="shopping-cart-items" class="flex flex-col gap-4" />
        </div>
    )
}
