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
    for (let i = 0; i < parseInt(lines[0]); i++) {
        let line = lines[1 + i].split(" ")
        console.log(line[0].trim() + " " + (parseInt(line[1]) + 1))
    }
});
