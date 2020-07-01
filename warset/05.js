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
    let m = parseInt(lines[0])
    if (m <= 5) {
        console.log("raw")
    } else if (m <= 7) {
        console.log("soft boiled")
    } else {
        console.log("hard boiled")
    }
});
