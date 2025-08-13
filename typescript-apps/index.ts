// 真偽値型
let hasValue: boolean = true; // 真(true)または偽(false)を表す

// 数値型（整数）
let count: number = 10; // 通常の整数
let float: number = 10.1; // 浮動小数点数
let negative: number = -0.12; // 負の数
let hex: number = 0x10; // 16進数（0xで始める）
let binary: number = 0b10; // 2進数（0bで始める）
let octal: number = 0o10; // 8進数（0oで始める）

// BigInt型（非常に大きな整数）
let big: bigint = 100n; // nを付けて宣言

// 文字列型
let string: string = "Hello, World!"; // ダブルクォートで文字列
let templateString: string = `Hello, ${string}`; // テンプレートリテラル（変数埋め込み可能）
let char: string = "A"; // 1文字の文字列
let empty: string = ""; // 空文字列

// オブジェクト型
let person: { name: string, age: number } = { name: "John", age: 30 }; // nameが文字列、ageが数値

// 配列型
let array: number[] = [1, 2, 3]; // 数値型配列
let array2 = ["Apple", "Banana", "Cherry"]; // 文字列型配列

// タプル型（要素ごとに型が決まっている配列）
let tuple: [string, number] = ["Hello", 10]; // 最初がstring、次がnumber

// any型（型チェックなし）
let any: any = "Hello"; // どんな型でも代入可能（非推奨）

// unknown型（安全なany）
let unknown: unknown = "Hello"; // 型を使用前にチェックが必要

// never型（値を持たない型）
let never: never; // 到達不能な型（例: 常に例外を投げる関数）
