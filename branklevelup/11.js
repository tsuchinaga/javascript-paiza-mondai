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
    let users = [];
    let ub = new Map()
    let br = new Map()

    let n = parseInt(lines[0])
    for (let i = 1; i < n + 1; i++) {
        let line = lines[i].split(" ")
        ub.set(line[0], line[1])
        users.push(line[0])
    }
    let m = parseInt(lines[n + 1])
    for (let i = n + 2; i < n + m + 2; i++) {
        let line = lines[i].split(" ")
        br.set(line[0], line[1])
    }

    for (let i = 0; i < users.length; i++) {
        console.log(users[i] + " " + br.get(ub.get(users[i])))
    }
});
