import { Product } from "@/types"
import CartItem from "./cart-item"

export default function () {
    return (
        <div class="mt-10 flex flex-col gap-4">
            <h1 class="text-gray-300 text-2xl font-semibold">Products</h1>
            {items.map(item => <CartItem item={item} />)}
        </div>
    )
}

const items: Product[] = [
    { id: "p-one", name: "Shoes", price: 10 },
    { id: "p-two", name: "Jumper", price: 20 },
    { id: "p-three", name: "Tennis Racket", price: 30 },
    { id: "p-four", name: "Tennis Balls", price: 5 },
    { id: "p-five", name: "Hat", price: 5 },
    { id: "p-six", name: "Socks", price: 2 },
]