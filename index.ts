// 関数
// 返り値がないときはvoidで書く。省略可能
// 仮引数に?を入れてundefinedにすることもできる
// 初期値の設定も可能
function greet(name: string = 'anna'): void {
  console.log(`Hello World ${name}`);
}
greet();

// 可変長引数
function sum(...values: number[]): number {
  return values.reduce(function (prev, current) {
    return prev + current;
  });
}
console.log(sum(1, 3, 5, 9));
