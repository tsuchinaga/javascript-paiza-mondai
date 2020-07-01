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
    let nm = lines[0].split(" ")
    let n = parseInt(nm[0])
    let m = parseInt(nm[1])
    let dots = []
    for (let i = 1; i < n + 1; i++) {
        dots.push(lines[i].split(""))
    }

    let res = []
    if (isVertical(n, m, dots) || isHorizontal(n, m, dots)) res.push("line")
    if (isPoint(n, m, dots)) res.push("point")
    if (res.length > 0) {
        console.log(res.join(" ") + " symmetry")
    } else {
        console.log("none")
    }
});

function isVertical(n, m, dots) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m / 2; j++) {
            if (dots[i][j] !== dots[i][m - j - 1]) return false
        }
    }
    return true
}

function isHorizontal(n, m, dots) {
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < m; j++) {
            if (dots[i][j] !== dots[n - i - 1][j]) return false
        }
    }
    return true
}

function isPoint(n, m, dots) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dots[i][j] !== dots[n - i - 1][m - j - 1]) return false
        }
    }
    return true
}
