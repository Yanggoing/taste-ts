// 类中泛型
interface Item {
  name: string;
}

// item中必须要有name这个类型 使用接口定义Item

class DataManger<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

// 传入类型只能是number和string时

interface Test {
  name: string;
}

class DataManger2<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data2 = new DataManger2([1]);

// 传入的值必须包括Item中所有的项
const data = new DataManger([
  {
    name: "zy",
  },
]);
data.getItem(0);

// 如何使用泛型作为一个具体类型的注解
function hello<T>(params: T) {
  return params;
}

const funcs: <T>(params: T) => T = hello;
