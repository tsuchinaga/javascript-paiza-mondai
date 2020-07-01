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
    let n = parseInt(lines[0]);
    let sum = 0
    for (let i = 1; i < n+1; i++) {
        let a = parseInt(lines[i]);
        if (a >= 5) sum += a;
    }
    console.log(sum)
});
