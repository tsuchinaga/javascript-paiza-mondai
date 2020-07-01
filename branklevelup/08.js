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
        let contain = false
        list.forEach(function (kv, i) {
            if (kv.key === sd[0]) {
                kv.value += parseInt(sd[1])
                contain = true
            }
        })
        if (!contain) list.push({"key": sd[0], "value": parseInt(sd[1])})
    }

    while (list.length) {
        let maxI = -1
        list.forEach(function (kv, i) {
            if (maxI === -1 || kv.value > list[maxI].value) maxI = i
        })
        console.log(list[maxI].key + " " + list[maxI].value)
        list.splice(maxI, 1)
    }
});
