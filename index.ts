// ジェネリック
class NumberStore {
  data: number;
}

class StringStore {
  data: string;
}
// データ型が違うだけの同じプロパティを持っておくのはだるい。anyを使ってもいいが、型チェックが入らないのでそれはそれでいや。

class Store<T> {
  data: T;
  getStore(): T {
    // T,　U, V, T1, T2, T3と続く
    return this.data;
  }
}

let stringData = new Store<string>();
let booleanData = new Store<boolean>();

function hello<T>(keyword: T): T {
  console.log(`Log: ${keyword}.`);
}
hello<string>('Hello, anna');
hello<number>(1000);

class Component<T, U> {
  name: T;
  created: U;
}
let component = new Component<string, number>();
component.created = 1;
