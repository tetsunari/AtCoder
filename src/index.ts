import * as fs from 'fs';

const Main = (input: string) => {
    const data = input;
    const lines = data.split('\n');
    const n = parseInt(lines[0]);
    const a = lines[1].split(' ').map(Number);

    let count = 0;

    while (a.every(x => x % 2 === 0)) {
        for (let i = 0; i < n; i++) {
            a[i] /= 2;
        }
        count++;
    }

    console.log(count);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
