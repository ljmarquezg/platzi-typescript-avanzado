import {Product} from './product.model';

import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from './product.dto';
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

export const updateProduct = (id: string | number, data: UpdateProductDTO): Product => {
    const index = products.findIndex((product: Product) => product.id === id);
    const prevData = products[index];
    const newData =  {
        ...prevData,
        ...data,
    }

    return newData
};

export const deleteProduct = (id: string) => {
    const index = products.findIndex((product: Product) => product.id === id);
    products.splice(index, 1);
}

export const findProducts = (data: FindProductDTO): Product[] | undefined => {
    return products;
};

export const findProduct = (id: string | number): Product | undefined => {
    return products.find((product: Product) => product.id === id);
};