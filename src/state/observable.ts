type Listener<T> = (state: T) => void;

export class ObservableState<T> {
  listeners: Listener<T>[];
  state: T;

  constructor(initialState: T) {
    this.state = initialState;
    this.listeners = [];
  }

  subscribe(listener: Listener<T>) {
    this.listeners.push(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  set(newState: T) {
    this.state = newState;
    this.notify();
  }
}
