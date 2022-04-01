// スプレッド演算子
let categories = ['post', 'new', 'info'];

// 複製
let copyCat = [...categories];
console.log(copyCat, copyCat === categories);
// ...を使うことで別の配列として展開することができる

let pushCat = ['other', ...categories];
console.log(pushCat);

// オブジェクトも展開できる
let post = { id: 1, content: 'dummy', created: '2020-01-01' };
let copyObj = { ...post };
console.log(copyObj);

// オブジェクトを配列で展開することはできない
// let test = [...post];

// 配列をオブジェクトで展開することはできる。インデックス値がキーになる
let test = { ...categories };
console.log(test);
