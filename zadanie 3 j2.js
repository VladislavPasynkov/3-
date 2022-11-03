let a = 13.890123;
let b = 2.891564;
let n = 3;

let odin = Math.round(a % 1* Math.pow(10,n));
let dva = Math.round(b % 1* Math.pow(10,n));

console.log(odin, dva);

console.log('', a === b);
console.log('', odin === dva);
console.log('', odin > dva);
console.log('', odin < dva);
console.log('', odin != dva);
console.log('', odin >= dva);
console.log('', odin <= dva);