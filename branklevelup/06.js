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
    let s = lines[0]
    let t = lines[1]
    let cnt = 0
    for (let i = 0; i <= t.length - s.length; i++) {
        if (s === t.substr(i, s.length)) cnt++
    }
    console.log(cnt)
});
