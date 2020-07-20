// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接收的参数是构造函数
// @符号修饰

// function testDecorator(constructor: any) {
//   constructor.prototype.getName = () => {
//     console.log("decorator");
//   };
// }

// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log("zy");
//       };
//     };
//   } else {
//     return function (constructor: any) {};
//   }
// }

// function testDecorator1(constructor: any) {
//     console.log("decorator1");
// }

// 顺序从下到上
// @testDecorator
// @testDecorator1
// @testDecorator(true)
// class Test {}

// const tt = new Test();

function testDecorator() {
  return function <T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
      name = "zy";
      getName() {
        return this.name;
      }
    };
  };
}

// @testDecorator
// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const tttt = new Test("dell");
console.log(tttt.getName());
