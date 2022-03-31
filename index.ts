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
