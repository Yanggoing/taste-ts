// 属性的装饰器

// function nameDecorator(target: any, key: string): any {
//   console.log(target, key);
//   const descriptor: PropertyDescriptor = {
//     writable: false,
//   };
//   可以替换掉原始的descriptor
//   return descriptor;
// }

// 修改的并不是实例上的name 而是原型上的name
function nameDecorator(target: any, key: string): any {
  target[key] = "zyyy";
}

// name放在实例上
class Hest {
  @nameDecorator
  name = "zy";
}

const hest = new Hest();
hest.name = "zy";
// 会先查看实例上的name 如果没有就去查找原型上的name
console.log(hest.name);
