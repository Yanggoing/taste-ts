// 普通方法 target对应的是类的 prototype
// 静态方法 target 对应的是类的构造函数

function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  //   descriptor.writable = false;
  descriptor.value = function () {
    return "decorator";
  };
  console.log(target, key);
}

class Tmethod {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const ttttt = new Tmethod("z");
// ttttt.getName = () => {
//   return "123";
// };
