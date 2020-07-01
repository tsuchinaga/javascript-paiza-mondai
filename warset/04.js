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
    for (let i = 1; i < n+1; i++) {
        let w = ""
        switch (lines[i]) {
            case "forward":
                w = "Sunny"
                break
            case "reverse":
                w = "Rainy"
                break
            case "sideways":
                w = "Cloudy"
                break
        }
        console.log(w)
    }
});
