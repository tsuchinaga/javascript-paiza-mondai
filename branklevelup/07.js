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
    let list = [];
    for (let i = 1; i <= n; i++) {
        let sd = lines[i].split(" ")
        list.push({"key": sd[0], "value": parseInt(sd[1])})
    }

    while (list.length) {
        let minI = -1
        list.forEach(function (kv, i) {
            if (minI === -1 || kv.value < list[minI].value) minI = i
        })
        console.log(list[minI].key)
        list.splice(minI, 1)
    }
});
