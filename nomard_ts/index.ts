const name = "minmo",
  age = 19,
  gender = "male";
// const age = 19;
// const gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are age ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};
