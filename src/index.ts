import * as fs from 'fs';

const Main = (input: string): void => {
    const data = input;
    const lines = data.split(' ').map(Number);
    const [n, a, b] = lines;

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        const num = i.toString().split('').map(Number).reduce((c, d) => c + d, 0);
        if (num >= a && num <= b) {
            sum += i;
        }
    }

    console.log(sum);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
