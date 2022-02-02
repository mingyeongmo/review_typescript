const name = "minmo",
  age = 19,
  gender = "male";
// const age = 19;
// const gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are age ${age}, you are a ${gender}!`;
};

console.log(sayHi(name, age, gender));

export {};
