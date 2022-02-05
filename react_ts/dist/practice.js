"use strict";
// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b,
//   };
// }
// const merged = merge({ foo: 1 }, { bar: 1 });
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
console.log(wrap);
