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