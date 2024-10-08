export const createProduct = (
    id: string | number,
    isNew = true,
    stock = 10,
) => {
    return {
        id, 
        stock,
        isNew
    }
};

const p1 = createProduct(123, true, 20);
const p2 = createProduct(123, false);
const p3 = createProduct(123, false, 0);
const p4 = createProduct(123, true, 0);
const p5 = createProduct(5);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
