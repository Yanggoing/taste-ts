// 命名空间
// 三斜杠语法声明
///<reference path="./6-2.命名空间.ts" />
// import { X } from "./6-2.命名空间";

namespace Home {
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
