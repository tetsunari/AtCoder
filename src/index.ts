import * as fs from 'fs';

const Divisor = (N: number): number[] => {
    const divisorList: number[] = [];
    for (let i = 1; i * i <= N; i++) {
        if (N % i === 0) {
            divisorList.push(i);
            if (i !== N / i) {
                divisorList.push(N / i);
            }
        }
    }
    return divisorList.sort((a, b) => a - b);
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    console.log(Divisor(N).join(' '));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
