const prices: (number | string)[] = [100, 200, '300'];

prices.push(400);
prices.push('500');
console.log(prices);


const user: [string, number] = ['nicobytes', 15];
/* 
    user = [15, 'string'] // generate error
    user = [15, 15] // generate error
    user = ['string, 'string'] // generate error
    user = [] // generate error
*/
const [username, age] = user;
console.log(user);
console.log(username);
console.log(age);
