import { Product } from "@/types";
import { ObservableState } from "./observable";

class CartState extends ObservableState<Product[]> {
  get items() {
    return this.state;
  }

  add(item: Product) {
    this.set([...this.state, item]);
  }

  remove(id: Product["id"]) {
    const updated = this.state.filter((item) => item.id !== id);
    this.set(updated);
  }
}

export default new CartState([]);
