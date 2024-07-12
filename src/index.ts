import * as fs from 'fs';

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const n = Number(lines[0]);
    const a = lines[1].split(' ').map(Number);

    a.sort((a, b) => b - a);
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            sum1 += a[i];
        } else {
            sum2 += a[i];
        }
    }
    console.log(sum1 - sum2);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
