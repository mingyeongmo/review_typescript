// Shape 라는 interface 를 선언한다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.

  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

type Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

type Developer = Person & {
  skills: string[];
}

const person: Person = {
  name: "감사림",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[]; // Person[]를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person,expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];