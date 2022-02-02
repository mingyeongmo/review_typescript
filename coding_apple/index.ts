// let 이름: { name: string; age: number; sex?: string } = {
//   name: "kim",
//   age: 18,
// };
type Name = string | number;

let 이름: Name = 123;

function 함수(x: number): number {
  return x * 2;
}

type Member = [number, boolean]; // 무조건 첫번째는 number 두번째는 boolean 타입
let john: Member = [123, true];

type Wow = {
  [key: string]: string;
};

let wow: Wow = { name: "kim", age: "123" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
