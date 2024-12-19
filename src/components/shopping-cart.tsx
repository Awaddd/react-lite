import { Product } from "@/types"
import CartItem from "./cart-item"
import cart from "@/state/cart"

export default function () {
    const items: Product[] = cart.items

    cart.subscribe(state => {
        console.log("items", state)
    })

    return (
        <div class="mt-10 flex flex-col gap-4">
            <h1 class="text-gray-300 text-2xl font-semibold">Shopping Cart</h1>
            {items.map(item => <CartItem item={item} />)}
        </div>
    )
}
