import {Product} from './product.model';

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string;
}

type Color = Pick<Product, 'color' | 'description'>