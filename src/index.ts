import * as fs from 'fs';

const Main = (input: string) => {
    const data = input;
    const lines = data.split('\n');
    const a = parseInt(lines[0]);
    const b = parseInt(lines[1]);
    const c = parseInt(lines[2]);
    const x = parseInt(lines[3]);

    let count = 0;
    for (let i = 0; i < a + 1; i++) {
        for (let j = 0; j < b + 1; j++) {
            for (let k = 0; k < c + 1; k++) {
                if (500 * i + 100 * j + 50 * k === x) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
