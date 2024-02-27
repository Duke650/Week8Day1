// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: 23};
// A: d: { age: any;}

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: never[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number
} = {
    title: 'Lose Yourself',
    releaseYear: 2001
};
// A: release year is not declared

let prices = [100, 200, 300];
prices[0] = 200;
// A: must reassign prices[0] to a number

function myFunc(a: number, b: number): number {
    return a + b
}
// A: this func is not returning anything. It should return a number


// CodeWars

// #1 Detect Pangram

function isPangram(string){
    const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    string = string.toLowerCase().split('')
    const resultArr = string.filter(letter => alph.indexOf(letter) !== -1)
    const result = new Set(resultArr)
    return result.size < 26 ? false : true
    }
  
// #2 Split Strings    

function solution(str){
    let result = []
    str = str.split('')
    let last;
    if (str.length % 2 === 1) {
      last = str.pop()
    }
    for (let i = 0; i < str.length; i += 2) {
        result.push(`${str[i]}${str[i+1]}`)
    }
    if (last) {
      result.push(`${last}_`)
    }
    return result
}