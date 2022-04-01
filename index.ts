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

  // アクセサメソッド　getter setter
  get legs() {
    if (this._legs > 2) {
      return this._legs;
    }
  }

  set legs(value: number) {
    if (value > 1) {
      this._legs = value;
    }
  }

  // get email() {
  //   return this.formGroup.get('email');
  // }
  // dog.email

  //読み取り専用の時はgetterだけ、書き込み専用の時はsetterだけ
  //プロパティ名と同じアクセサメソッドは定義できない
}

let dog = new Animal(true);
// dog.cry();
dog.legs = 4;
console.log(dog.legs);

// アクセサメソッドは、普通にプロパティ設定してprivateだったりすると外部から取ってこれないので、getterメソッドを指定して上げるといいらしい
// でも、じゃぁ初めからpublicで指定しておけばいいじゃんって思うんだけど
// あ、恐らく、素直にこの変数の中身は？と聞かれたときに、初めに持っている数字ではないものを渡さなければいけないときとかがあって、そのためにこのようにしているのかな一旦別のものを

// プロパティって、普通に定義するのとconstructorするのと何が違うのかわからなかったけど。
// 外部から引数としてもらってきた値をいれたい場合はconstructorで定義した方がいいよねっていうこと見たい。
// class Anumal {
//   isCry: boolean = true
//   constructor(isCry: boolean) {
//     this.isCry = isCry
//   }
// }
// ってやると冗長だもんね。

// そして、アクセス修飾子を使うことでわざわざthis.isCry = isCryを書かなくてよくなるっぽい。
// アクセス修飾子はpublic, protected, privateの3つ
// public はどこからでもアクセス可能。インスタンスで自由にアクセスできる
// protectedは自身のクラスと派生クラスの中でアクセスできる。インスタンス化したときにアクセスできない。
// privateはそのクラスの中で飲みアクセス可能。派生クラスからはアクセスできない。

// class Animal {
//   isCry: boolean = true
//   constructor(public isCry: boolean) {}
// }
