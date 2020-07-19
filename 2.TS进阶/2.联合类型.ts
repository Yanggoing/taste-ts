interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    // 类型断言 实现类型保护
    (animal as Bird).sing();
  }
  (animal as Dog).bark();
}

// in语法来做类型保护
function trainAnialSecond(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// typeof语法来做类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

// 使用instanceof 来做类型保护 必须要定义类
class NumberObj {
  count: number;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
}
