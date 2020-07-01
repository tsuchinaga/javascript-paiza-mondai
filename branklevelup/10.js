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
    let eyes = [];
    for (let i = 0; i < 5; i++) {
        lines[i].split("").forEach(function (s) {
            switch (s) {
                case "O":
                    eyes.push(1)
                    break
                case "X":
                    eyes.push(-1)
                    break
                default:
                    eyes.push(0)
            }
        })
    }

    let hits = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20],
    ]
    for (let i = 0; i < hits.length; i++) {
        let sum = 0
        for (let j = 0; j < 5; j++) {
            sum += eyes[hits[i][j]]
        }
        if (sum === 5) {
            console.log("O")
            return
        }
        if (sum === -5) {
            console.log("X")
            return
        }
    }
    console.log("D")
});
