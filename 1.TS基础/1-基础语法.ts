interface Point {
  x: number;
  y: number;
}

const point: Point = {
  x: 3,
  y: 4,
};

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

const getTotal: () => number = () => {
  return 123;
};

// type annotation 类型注解 告诉TS变量是什么类型
// type inference 类型推断 TS会自动去尝试分析变量的累型
// 如果TS能够自动分析变量类型 我们就什么也不需要做了
// 如果TS无法饭呢西变量类型的话 我们就需要使用类型注解

let count: number;
count = 123;

let countInference = 123;

// const firstNum = 2;
// const secondNum = 3;
// const total = firstNum + secondNum;

function calTotal(firstNum: number, secondNum: number) {
  return firstNum + secondNum;
}

const total = calTotal(1, 2);

interface Person {
  name: string;
  age: number;
}

// const obj: Person = {
//   name: "zy",
//   age: 18,
// };

// 函数相关
function add(first: number, second: number): number {
  return first + second;
}

function sayHello(): void {
  console.log("hello");
}

// never
function errorEmitter(): never {
  throw new Error();
}

// 解构语法 给类型
function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}

const func = (str: string): number => {
  return 10;
};

const arr2: (number | string)[] = [1, "2", 3];
const stringArr: string[] = ["a", "b", "c"];
const strArr: Array<string> = ["1"];

// 类型别名
// type alias
type User = { name: string };

const objArr: User[] = [];

const numberArr: (number | string)[] = [1, "2", 3];

const brr: [number, string, string] = [1, "2", "2"];

class Teacher {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const objectArr: Teacher[] = [new Teacher("zy", 18)];

// 元组
const teacherInfo: [string, string, number] = ["zy", "male", 18];

const teacherList: [string, string, number][] = [["zy", "male", 18]];
