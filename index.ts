// テンプレート文字列
let template1 = `this is template strings.`;
// 改行がそのまま保持される
let template2 = `
  Hello, TypeScript!
  Thank you.
`;
console.log(template2);

// 変数を埋め込んだ文字列
let name = 'anna';
template2 = `
  Hello, TypeScript!
  Thank you ${name}.
`;
console.log(template2);
