import { CartProduct, Product } from "@/types";
import { ObservableState } from "./observable";

class CartState extends ObservableState<CartProduct[]> {
    get total() {
        return this.state.reduce((prev, product) => {
            if (product.count > 0) {
                return prev + product.price * product.count;
            }
            return prev + product.price;
        }, 0);
    }

    get items() {
        return this.state;
    }

    add(item: Product) {
        const index = this.state.findIndex(({ id }) => id === item.id);

        if (index === -1) {
            const modifiedItem = {
                ...item,
                count: 1,
            };
            this.set([...this.state, modifiedItem]);
        }

        const clone = this.state.slice();
        clone[index].count++;
        this.set(clone);
    }

    remove(item: CartProduct) {
        if (item.count > 1) {
            const index = this.state.findIndex(({ id }) => id === item.id);
            const clone = this.state.slice();
            clone[index].count--;
            this.set(clone);
            return;
        }

        const updated = this.state.filter(({ id }) => id !== item.id);
        this.set(updated);
    }
}

export default new CartState([]);
