export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number,
) => {
    return {
        id, 
        stock: stock ?? 10, // si se condigura de esta manera, stock: stock || 10, si se envía un valor 0, null, undefined, se asignará 10. Por lo tanto es mejor usar nullish-coallasing stock: stock ?? 10
        isNew: isNew ?? true,
    }
};

const p1 = createProduct(123, true, 20);
const p2 = createProduct(123, false);
const p3 = createProduct(123, false, 0);

console.log(p1);
console.log(p2);
console.log(p3);