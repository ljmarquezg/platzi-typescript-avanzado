import { User } from '../users/user.model';
import { Product } from '../products/product.model';

export interface Order {
    id: string | number;
    createdAt: Date;
    products: Product[];
    user: User
};