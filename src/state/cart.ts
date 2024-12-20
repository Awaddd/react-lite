import { Product } from "@/types";
import { ObservableState } from "./observable";

class CartState extends ObservableState<Product[]> {
  get items() {
    return this.state;
  }

  add(item: Product) {
    this.set([...this.state, item]);
  }

  remove(index: number) {
    const updated = this.state.filter((_, j) => index !== j);
    this.set(updated);
  }
}

export default new CartState([]);
