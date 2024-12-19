import CartItem from "./cart-item"

export default function () {
    return (
        <div class="mt-10 flex flex-col gap-4">
            <h1 class="text-gray-300 text-2xl font-semibold">Products</h1>
            {items.map(item => <CartItem item={item} />)}
        </div>
    )
}

const items = [
    { name: "Shoes", price: 10 },
    { name: "Jumper", price: 20 },
    { name: "Tennis Racket", price: 30 },
    { name: "Tennis Balls", price: 5 },
    { name: "Hat", price: 5 },
    { name: "Socks", price: 2 },
]