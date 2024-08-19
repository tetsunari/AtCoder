import * as fs from 'fs';

const expectation = (N: number, B: number[], R: number[]): number => {
    return B.reduce((pre, curr) => pre + curr, 0) / N + R.reduce((pre, curr) => pre + curr, 0) / N;
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    const B = lines[1].split(' ').map(Number);
    const R = lines[2].split(' ').map(Number);
    console.log(expectation(N, B, R).toFixed(6));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
