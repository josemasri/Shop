export interface Product {
    _id: number;
    title: string;
    img: string;
    price: number;
    stock: number;
    category: string;
    description: string;
    options?: Option[];
}

interface Option {
    option: string;
    options: string[];
}
