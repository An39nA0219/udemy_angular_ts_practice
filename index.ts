// 分割代入
let categories = ['post', 'new', 'info', 'other'];
let [a, b] = categories;
console.log(a, b); //post, newが出てくる

// 1個飛ばしにもできる
let [c, d, , f] = categories;
console.log(c, d, f); //post, new, otherが出てくる

// 一部をまとめる
let [g, h, ...i] = categories;
console.log(g, h, i); //post, new, [info,other]が出てくる

// 変数の初期値の設定
let [j = 10, k = 7] = [1];
console.log(j, k); //1, 7が出てくる

// オブジェクトも同様に
// let post = { id: 1, content: 'dummy', created: '2020-01-01' };
// let copyObj = { ...post };
// console.log(copyObj);

// const { id, content} = post;
// console.log(id, content); //1, dummyが出てくる

// 別名で取り出す キーの変数名で基本は取り出すのでこういう感じで書き換える
let post = { id: 1, content: 'dummy', created: '2020-01-01' };
let copyObj = { ...post };
console.log(copyObj);

const { id, content: body } = post;
console.log(id, body); //1, dummyが出てくる
