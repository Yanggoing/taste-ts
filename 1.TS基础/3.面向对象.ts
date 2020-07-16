class Pman {
  name = "dell";
  getName() {
    return this.name;
  }
}

// 继承
class Tman extends Pman {
  getTmanName() {
    return "zy";
  }
  // 子类改写父类方法
  getName() {
    // super调用父类方法
    return super.getName() + "lee";
    // return "lee";
  }
}

const pman = new Pman();
console.log(pman.getName);

// private protected public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用
// class Xman {
//   public name: string;
//   private age: number
// }

// const xman = new Xman()
// xman.name = 'dell'

class Xman {
  // 传统写法
  //   public name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }

  // 简化写法
  constructor(public name: string) {}
}

class TeaMan extends Xman {
  // 子类有构造函数时 需要先调用父类的构造函数并传值
  constructor(age: number) {
    super("zy");
  }
}

// getter & setter
class Sman {
  constructor(private _name: string) {}
  // 在类外调用getName时相当于调用getter
  get name() {
    return this._name + "zying";
  }
  // 可以在类外更改私有属性
  set name(name: string) {
    const realName = name.split(" ")[0];
    this._name = name;
  }
}

const sman = new Sman("zy");
// get
sman.name;
// set
person.name = "zhexun";

// 单例模式
// 只允许实例化一个对象
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}

  // 把方法挂在类上
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("zyu");
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();

// readonly
// class Abman {
//   private readonly name: string;
//   constructor(name: string) {
//     this.name = name
//   }
// }
// const abman = new Abman("zy");
// abman.name = "hello";

// 抽象类 纯虚函数
// abstract class Geom {
//   width: number;
//   getType() {
//     return "Geom";
//   }
//   abstract getArea(): number;
// }

// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }

// class Square {}

// class Triangle {}

interface Person {
  name: string;
}

interface Teacher extends Person {
  teachingAge: number;
}

interface Student extends Person {
  age: number;
}

const teacher = {
  name: "zy",
  teachingAge: 20,
};

const student = {
  name: "zyyyy",
  age: 18,
};

const getUserInfo = (user: Teacher | Student) => {
  console.log(user.name);
};
