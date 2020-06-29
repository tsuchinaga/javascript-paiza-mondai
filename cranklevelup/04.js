process.stdin.resume();
process.stdin.setEncoding('utf8');

let lines = [];
let reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});

reader.on('close', () => {
    const n = parseInt(lines[0])
    let list = [];
    for (let i = 1; i < n + 1; i++) {
        let line = lines[i].split(" ")
        list.push(("00" + line[1]).slice(-2) + ":" + ("00" + line[0]).slice(-2))
    }
    list.sort()
    list.reverse()
    list.forEach(function (a) {
        let l = a.split(":")
        console.log(parseInt(l[1]) + " " + parseInt(l[0]))
    })
});
