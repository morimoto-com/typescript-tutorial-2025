// 真偽値型
const hasValue: boolean = true // 真(true)または偽(false)を表す
console.log(hasValue)

// 数値型（整数）
const count: number = 10 // 通常の整数
const float: number = 10.1 // 浮動小数点数
const negative: number = -0.12 // 負の数
const hex: number = 0x10 // 16進数（0xで始める）
const binary: number = 0b10 // 2進数（0bで始める）
const octal: number = 0o10 // 8進数（0oで始める）

console.log(count)
console.log(float)
console.log(negative)
console.log(hex)
console.log(binary)
console.log(octal)

// BigInt型（非常に大きな整数）
const big: bigint = 100n // nを付けて宣言
console.log(big)

// 文字列型
const string: string = 'Hello, World!' // ダブルクォートで文字列
const templateString: string = `Hello, ${string}` // テンプレートリテラル（変数埋め込み可能）
const char: string = 'A' // 1文字の文字列
const empty: string = '' // 空文字列
console.log(string.toUpperCase())
console.log(templateString)
console.log(char)
console.log(empty)


// オブジェクト型
const person: { name: string; age: number } = { name: 'John', age: 30 } // nameが文字列、ageが数値
console.log(person)

// 配列型
const array: number[] = [1, 2, 3] // 数値型配列
const array2 = ['Apple', 'Banana', 'Cherry'] // 文字列型配列
console.log(array)
console.log(array2)

// タプル型（要素ごとに型が決まっている配列） ※型推論されない
const tuple: [string, number] = ['Hello', 10] // 最初がstring、次がnumber
tuple.push(10)
// タプルはpushできるが、pushした値を参照はできない
// console.log(tuple[3]);

// enum型（列挙型）
enum CoffeeSize {
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI',
}

// enumの使用例
const coffeeSize = {
  hot: true,
  size: CoffeeSize.TALL,
}
console.log(coffeeSize)

// any型（型チェックなし）
const any: any = 'Hello' // どんな型でも代入可能（非推奨）
console.log(any)

// union型（複数の型を指定）
const union: string | number = 'Hello'
console.log(union)

// literal型（特定の値のみを指定）
const literal: 'Hello' | 'World' = 'Hello'
console.log(literal)

// unknown型（安全なany）
const unknown: unknown = 'Hello' // 型を使用前にチェックが必要
console.log(unknown)

// never型（値を持たない型）
let never: never // 到達不能な型（例: 常に例外を投げる関数）

// typeエイリアス
type ClothSize = 'S' | 'M' | 'L' | 'XL' | 'XXL'
const clothSize: ClothSize = 'S'
console.log(clothSize)

// 関数に型を適用
function add(a: number, b: number): number {
    return a + b
}
console.log(add(1,2))

// 関数の戻り値をvoidにする
function printMessage(message: string): void {
    console.log(message)
}

