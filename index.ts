// クラス
// アクセス修飾子
class Animal {
  age: number = 10;
  private _legs = 1;

  constructor(isCry: boolean) {
    this.isCry = isCry;
  }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }
}

class Dog extends Animal {
  consutructor(public isCry: boolean) {
    // 元のクラスのコンストラクタを実行できる。むしろやらないと親クラスのプロパティの書記かは行われない。
    super(isCry);
  }

  cry(): void {
    // if (this.isCry){
    //   alert('Bow, wow')
    // }
    console.log('dog is cry');
    // 親クラスのcryメソッドを呼ぶ場合
    // super.cry();
  }
}

let dog = new Dog(true);
dog.cry();
