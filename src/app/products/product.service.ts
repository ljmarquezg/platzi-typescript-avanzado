import {Product} from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product): void => {
    products.push(data);
};

export const updateProduct = (id: string, data: Partial<Product>): void => {
    const index = products.findIndex((product: Product) => product.id === id);
    products[index] = {
        ...products[index],
        ...data,
    }
};

export const deleteProduct = (id: string) => {
    const index = products.findIndex((product: Product) => product.id === id);
    products.splice(index, 1);
}

export const findProduct = (id: string): Product | undefined => {
    return products.find((product: Product) => product.id === id);
};