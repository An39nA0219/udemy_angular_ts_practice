// 文字列
var title: string = 'Angular';
title = 'Angular!';

// 数値
var n: number = 9;

// 真偽値
var isOpen: boolean = true;

// 配列型（文字列しか入れられない配列）
var keywords: string[] = ['name', 'email', 'body'];

// 他のデータ型も入れられる配列にしたい時
var keywordsWithNum: (string | number)[] = ['name', 'email', 'body', 0];

// タプル型（指定の順に型を入れてね）
var payment: [number, string, number] = [1, 'apple', 300];

// オブジェクト型
var object: { [key: string]: string } = {
  name: 'Yohei Isokawa',
  id: 'test',
};

// オブジェクトキーワード（これは、細かい型を指定せず、ざっくりオブジェクトだよということだけ定義するというもの）
var post: object = [{ id: 12, content: 'lorem ipsum' }];

//共用型（union型) パイプで連続で繋げていけば1つの変数に複数を入れることができる。
var sample: string | number;
sample = 'aiueo';
sample = 123;

// enum型 定数を列挙する
enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13
}

console.log(KeyCode.Backspace);

enum ErrorCode {
  OK = 200,
  BAD_RESPONSE = 400,
  UNAUTHORIZED = 401,
}

console.log(ErrorCode.OK);

// Enumは省略することもできる。自動でインデックスが振られる
enum Character {
  Bob,
  Dad,
  Mom
}

// any型 全てのデータ型を許容してくれる。普通のJSみたいなかんじ。TSの良さが死ぬのであんまり使わない方がいい
var something: any = 'foo';
something = 100;
something = true;

// null, undefined型 
// 要素を取得するときに、ページローディング前だとnullになってしまう。HttpのElementまたはnullという感じで指定
var el: Element | null = document.querySelector('#app');
var foo: undefined = undefined;

// 型をしていない変数 TSのコンパイラが型を指定してくれる。型推論。
var unkown = 'string';