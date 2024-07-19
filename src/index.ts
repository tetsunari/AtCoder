import * as fs from 'fs';

const findBillCombination = (N: number, Y: number): [number, number, number] => {
    for (let i = 0; i <= N; i++) {
        for (let j = 0; j <= N - i; j++) {
            const k = N - i - j;
            if (i * 10000 + j * 5000 + k * 1000 === Y) {
                return [i, j, k];
            }
        }
    }
    return [-1, -1, -1];
}

const Main = (input: string): void => {
    const [N, Y] = input.split('\n')[0].split(' ').map(Number);
    const [a, b, c] = findBillCombination(N, Y);
    console.log(`${a} ${b} ${c}`);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
