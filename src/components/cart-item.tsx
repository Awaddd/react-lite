import cart from "@/state/cart"
import { Product } from "@/types"

type Props = {
    item: Product
    index: number
    action?: "add" | "remove"
}

export default function ({ item, index, action = "add" }: Props) {
    function addToCart() {
        console.log("Adding to cart", item)
        cart.add(item)
    }

    function removeFromCart() {
        cart.remove(index)
    }

    const AddButton = <button class="text-white" onClick={addToCart}>Add to cart</button>
    const RemoveButton = <button class="text-white" onClick={removeFromCart}>Remove from cart</button>

    return (
        <div class="p-3 border border-blue-900 text-blue-200 rounded flex justify-between">
            <div>
                <span>{item.name}</span>
                <span>{item.price}</span>
            </div>
            {action === "add" ? AddButton : RemoveButton}
        </div>
    )
}
