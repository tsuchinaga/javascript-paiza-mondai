process.stdin.resume();
process.stdin.setEncoding('utf8');

let lines = [];
let reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// 入力
reader.on('line', (line) => {
    lines.push(line);
});

// 出力
reader.on('close', () => {
    let s = lines[0].split(" ")
    console.log(s[0].substr(0, 1).toUpperCase() + "." + s[1].substr(0, 1).toUpperCase() + ".")
});
