// 声明文件 建立JS到TS桥梁

// 定义全局变量
declare var $: (param: () => {}) => void;

// 定义全局函数
declare function $(params: () => void): void {
};
// 重载
declare function $(params: string): void {
};

// 如何对对象进行类型定义 以及对类进行类型定义 以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {
      constructor() {}
    }
  }
}

interface JQuery {
  (readyFunc: () => void): void;
}
