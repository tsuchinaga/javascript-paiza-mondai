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
    const pqr = lines[0].split(" ")
    let p = parseInt(pqr[0])
    let q = parseInt(pqr[1])
    let pq = [];
    let qr = [];

    for (let i = 1; i < p + 1; i++) {
        let line = lines[i].split(" ")
        pq[line[0]] = line[1]
    }

    for (let i = 1 + p; i < p + 1 + q; i++) {
        let line = lines[i].split(" ")
        qr[line[0]] = line[1]
    }

    for (let i = 1; i <= p; i++) {
        console.log(i + " " + qr[pq[i]])
    }
});
