import cart from "@/state/cart";
import { CartProduct, Product } from "@/types";

type Props = {
    item: Product | CartProduct;
    action?: "add" | "remove";
};

export default function ({ item, action = "add" }: Props) {
    function addToCart() {
        cart.add(item);
    }

    function removeFromCart() {
        cart.remove(item as CartProduct);
    }

    const AddButton = (
        <button class="text-blue-400" onClick={addToCart}>
            Add
        </button>
    );

    const RemoveButton = (
        <button class="text-red-400" onClick={removeFromCart}>
            Remove
        </button>
    );

    return (
        <div class="p-3 border border-gray-600 rounded flex justify-between">
            <div class="flex flex-col gap-1.5">
                <div class="text-gray-300">
                    {item.name}
                    {"count" in item ? (
                        <span>
                            &nbsp;-&nbsp;
                            <span class="text-gray-400">{item.count}x</span>
                        </span>
                    ) : <span />}
                </div>
                <span class="text-yellow-400">£{item.price}</span>
            </div>
            {action === "add" ? AddButton : RemoveButton}
        </div>
    );
}
