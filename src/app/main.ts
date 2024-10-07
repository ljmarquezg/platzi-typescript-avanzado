import {addProduct} from './products/product.service';
import {faker} from '@faker-js/faker';
import {products} from './products/product.service';

for (let i = 0; i < 50; i++) {
    addProduct({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.urlPicsumPhotos(),
        color: faker.color.human(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        stock: faker.number.int({min: 10, max: 100}),
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
        price: parseFloat(faker.commerce.price()), 
        isNew: faker.datatype.boolean(),
        tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
        category: {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        },
    });
}


console.log(products);