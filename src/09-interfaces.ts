type Sizes = 'S' | 'M' | 'L' | 'XL';
/* type Product = {
    id: number | string;
    title: string;
    createdAt: Date;
    stock: number;
    size: Sizes;
} */
interface Product {
    id: number | string;
    title: string;
    createdAt: Date;
    stock: number;
    size: Sizes;
}

const products: Product[] = [];

products.push({
    id: 1,
    title: 'Product 1',
    createdAt: new Date(),
    stock: 10,
    size: 'M'
});

const addProduct = (data: Product): void => {
    products.push(data);
};
