type Props = {
    item: {
        name: string;
        price: number;
    }
}

export default function ({ item }: Props) {
    function addToCart() {
        console.log("Adding to cart", item)
    }

    return (
        <div class="p-3 border border-blue-900 text-blue-200 rounded flex justify-between">
            <div>
                <span>{item.name}</span>
                <span>{item.price}</span>
            </div>
            <button class="text-white" onClick={addToCart}>Add to cart</button>
        </div>
    )
}
