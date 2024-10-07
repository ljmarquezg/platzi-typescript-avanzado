import {addProduct, updateProduct} from './products/product.service';
import {faker} from '@faker-js/faker';
import {products} from './products/product.service';

for (let i = 0; i < 50; i++) {
    addProduct({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.urlPicsumPhotos(),
        color: faker.color.human(),
        stock: faker.number.int({ min: 10, max: 100 }),
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
        price: parseFloat(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
        categoryId: faker.string.uuid(),
    });
}


console.log(products);

const product = products[0];
updateProduct(product.id, { 
    title: 'New Title',
    stock: 100,
});