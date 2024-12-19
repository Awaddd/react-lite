import { Product } from "@/types";
import { ObservableState } from "./observable";

class CartState extends ObservableState<Product[]> {
  get items() {
    return this.state;
  }

  add(item: Product) {
    this.set([...this.state, item]);
  }
}

export default new CartState([]);
