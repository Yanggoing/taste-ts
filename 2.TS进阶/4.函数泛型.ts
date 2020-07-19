// 泛型 generic 泛指的类型
// 不确定传入参数类型并指定函数返回类型

function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

function anotherJoin<T>(first: T, second: T): T {
  return first && second;
}

function map<T>(params: Array<T>) {
  return params;
}

join<string, number>("1", 1);
map<string>(["123"]);
