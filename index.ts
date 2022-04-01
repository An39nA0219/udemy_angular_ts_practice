// let
let date = new Date();
// スコープの範囲がvarと異なる

// if (true) {
//   var foo = 'foo';
// }
// console.log(foo)
// varはifの外部から参照することができる。

// if (true) {
//   let boo = 'boo';
// }
// console.log(boo)
// letはifの外部から参照できない　Error: boo is not defined

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i)

// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }

// console.log(j);

// 変数の巻き上げの件
var hoge = 'hoge';
function logHoge() {
  console.log(hoge); //hoge
}
logHoge();
// ➡無事にhogeが返ってくる

var hoga = 'hoga';
function logHoga() {
  console.log(hoga); //undefined
  var hoga = 'new hoga!';
  console.log(hoga); //new hoga!
}
logHoga();
// なぜundefinedが入ってくるのか？　関数内の変数の巻き上げというのが発生する。
// 関数の中で定義されたvar変数は裏側で、関数の先頭で中身なしの状態で変数定義されているらしい
// var hoga = 'hoga';
// function logHoga() {
// 　var hoge; ←こんなかんじで！
//   console.log(hoga); //undefined
//   var hoga = 'new hoga!'
//   console.log(hoga); //new hoga!
// }
// logHoga();

// 関数内をletにしてみると、関数内すぐのconsole.log(foo)がエラーになる。これはletの場合は関数の巻き上げが起こらないため。
// letを積極的に使うようにした方良い
var foo = 'foo';
function logFoo() {
  console.log(foo);
  let foo = 'new foo!';
  console.log(foo); //new foo!
}
logFoo();
