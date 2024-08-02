import * as fs from 'fs';

const Factorization = (N: number): number[] => {
    const list: number[] = [];
    let i = 2;

    while (N >= i) {
        while (N % i === 0) {
            list.push(i);
            N /= i;
        }
        i++;
    }
    return list;
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    console.log(Factorization(N).join(' '));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
