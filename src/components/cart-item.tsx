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
        <button class="text-gray-400" onClick={addToCart}>
            Add
        </button>
    );

    const RemoveButton = (
        <button class="text-gray-400" onClick={removeFromCart}>
            Remove
        </button>
    );

    return (
        <div class="p-3 border border-gray-600 rounded flex justify-between">
            <div class="flex flex-col gap-1.5">
                <span class="text-gray-400">{item.name}</span>
                <span class="text-yellow-400">£{item.price}</span>
                {"count" in item && <span>{item.count}</span>}
            </div>
            {action === "add" ? AddButton : RemoveButton}
        </div>
    );
}
