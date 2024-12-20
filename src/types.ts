export type Product = {
    id: string;
    name: string;
    price: number;
};

export type CartProduct = Product & {
    count: number;
};
