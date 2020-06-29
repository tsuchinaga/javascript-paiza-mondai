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
    let h = parseInt(lines[0])
    let a = [];
    let b = [];

    let i = 0
    while (h > 0) {
        i++
        if (a.length < 2) {
            a.push(1)
            b.push(1)
            h -= 1
        } else {
            let ad = b[b.length - 1] + b[b.length - 2]
            let bd = a[a.length - 1] * 2 + a[a.length - 2]
            a.push(ad)
            b.push(bd)
            h -= bd
        }
    }
    console.log(i)
});
