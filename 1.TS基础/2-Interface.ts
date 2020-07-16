// interface 和 type 相类似 但并不完全一致
interface Person {
  // 只读属性
  // readonly name: string
  name: string;
  age: number;
  // 传入任意
  [propName: string]: any;
  // 传入方法
  say(): string;
}

// 继承
interface Teacher extends Person {
  teach(): string;
}

// 接口定义函数
// 函数类型SayHi
interface SayHi {
  // 接收参数为string
  // 返回类型为string
  (word: string): string;
}

const say: SayHi = (word: string) => {
  return word;
};

type Person1 = string;

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

const person = {
  name: "zy",
  age: 21,
  say() {
    return "hello";
  },
};

const person1 = {
  name: "zy",
  age: 19,
  sex: "male",
  say() {
    return "goodbye";
  },
};

// getPersonName({ name: "zy", age: 19, sex: "male" });
getPersonName(person1);

getPersonName(person);
setPersonName(person, "lee");

class Hape implements Person {
  name = "dell";
  age = 22;
  say() {
    return "hello";
  }
}
