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
    for (let i = 0; i < n; i++) {
        let line = lines[1 + i].split(" ") // t, h, m
        let t = line[0].split(":") // th, tm

        let th = (parseInt(t[0]) + parseInt(line[1]) + Math.floor((parseInt(t[1]) + parseInt(line[2])) / 60)) % 24
        let tm = (parseInt(t[1]) + parseInt(line[2])) % 60

        console.log(("00" + th).slice(-2) + ":" + ("00" + tm).slice(-2))
    }
});
