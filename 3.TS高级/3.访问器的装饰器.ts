// 访问器的装饰器

function visitDecorator(
  _target: any,
  _key: string,
  _descriptor: PropertyDescriptor
) {}

class Dest {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}

const dest = new Dest("zy");
dest.name = "zyyy";
console.log(dest.name);
