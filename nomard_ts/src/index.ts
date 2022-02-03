interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "minmoci",
  age: 19,
  gender: "male",
};

const name = "minmo",
  age = 19,
  gender = "male";
// const age = 19;
// const gender = "male";

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are age ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
