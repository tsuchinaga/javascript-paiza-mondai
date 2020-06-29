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
    const nmk = lines[0].split(" ")
    for (let i = 1; i < parseInt(nmk[0]) + 1; i++) {
        let cnt = 0
        lines[i].split(" ").forEach(function (a) {
            if (a === nmk[2]) cnt++
        })
        console.log(cnt)
    }
});
