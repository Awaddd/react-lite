import { Product } from "@/types";

type Callback<T> = (state: T) => void;

class CartState {
  items: Product[];
  listeners: Callback<Product[]>[];

  constructor() {
    this.items = [];
    this.listeners = [];
  }

  subscribe(callback: Callback<Product[]>) {
    this.listeners.push(callback);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.items);
    }
  }

  add(product: Product) {
    this.items.push(product);
    this.notify();
  }
}

export default new CartState();
