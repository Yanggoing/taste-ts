interface Pmman {
  name: string;
  age: number;
  gender: string;
}

type NAME = "name";
const abc: NAME = "name";
// 类型成为固定字符串
// type T = 'age'
// key: 'age'
// Person['age']

class Txman {
  constructor(private info: Pmman) {}
  // 使用keyof
  getInfo<T extends keyof Pmman>(key: T): Pmman[T] {
    // if (key === "name" || key === "age" || key === "gender") {
    // ts不能推断多层
    // 当key为其他值时不能推断
    //   return this.info[key];
    // }
    return this.info[key];
  }
}

const t1 = new Txman({
  name: "zy",
  age: 18,
  gender: "male",
});

const test = t1.getInfo("age");
