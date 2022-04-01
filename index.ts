// アロー関数は() => {}で書く方法
let add = (x1: number, x2: number): number => {
  return x1 + x2;
};
console.log(add(1, 3));

// 一文に収まる場合は省略できる。引数が1個の時だけ引数のカッコ略セル
let hello = (name) => `hello, ${name}`;

console.log(hello('anna'));

// functionで書いたとき、this　は下記の関数を設定したボタン要素自体を参照できる<button></buttton>
document.getElementById('button').addEventListener('click', function () {
  console.log(this);
});

// アロー関数で書いたときのthisは、Windowオブジェクトを参照する 関数が定義された場所のthisを参照する。グローバルスコープだねとなるのでWindowになる
document.getElementById('button1').addEventListener('click', () => {
  console.log(this);
});

// thisを意識しなくていいように基本アロー関数がいい
