import {Product} from './product.model';

import { CreateProductDTO } from './product.dto';
import { faker } from '@faker-js/faker/.';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO): Product => {
    const newProductData: Product = {
        ...data,
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    }

    products.push(newProductData);
    return newProductData;
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