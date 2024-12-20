type Listener<T> = (state: T) => void;

export class ObservableState<T> {
    protected listeners: Listener<T>[];
    protected state: T;

    constructor(initialState: T) {
        this.state = initialState;
        this.listeners = [];
    }

    subscribe(listener: Listener<T>) {
        this.listeners.push(listener);
    }

    protected notify() {
        for (const listener of this.listeners) {
            listener(this.state);
        }
    }

    protected set(newState: T) {
        this.state = newState;
        this.notify();
    }
}
