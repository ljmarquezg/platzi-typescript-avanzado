import {Product} from './product.model';

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string;
}

type Color = Pick<Product, 'color' | 'description'>

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}; // Partial permite dejar todos los datos como opcionales

export interface example extends Required<Product> {}; // Partial permite dejar todos los datos como obligatorios

// Readonly permite que los datos no sean modificados
export interface FindProductDTO extends Readonly<Partial<Product>> {}; // Partial permite dejar todos los datos como opcionales
