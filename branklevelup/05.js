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
    let c = lines[0]
    let s = lines[1]
    let cnt = 0
    s.split("").forEach(function (a) {
        if (c === a) cnt++
    })
    console.log(cnt)
});
