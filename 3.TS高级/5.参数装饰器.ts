// 原型 方法名 参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number): any {
  // paramIndex 参数所在的位置
  console.log(target, key, paramIndex);
}

class Jest {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age);
  }
}
