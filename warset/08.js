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
    let n = parseInt(lines[0])
    let ary = []
    for (let i = 1; i < n + 1; i++) {
        let contain = false
        for (let j = 0; j < ary.length; j++) {
            if (ary[j] === lines[i]) {
                contain = true
                break
            }
        }

        if (contain) {
            console.log("NO")
        } else {
            console.log("YES")
            ary.push(lines[i])
        }
    }
});
