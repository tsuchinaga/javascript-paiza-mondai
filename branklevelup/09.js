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
    if (lines[0] <= lines[2] && lines[2] <= lines[1]) {
        console.log("true")
    } else {
        console.log("false")
    }
});
