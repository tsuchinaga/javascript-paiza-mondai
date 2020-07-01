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
    let ab = lines[0].split(" ");
    let s = lines[1]
    console.log(s.substr(parseInt(ab[0]) - 1, parseInt(ab[1]) - parseInt(ab[0]) + 1))
});
