import * as fs from 'fs';

const Factorial = (N: number): number => {
    const list = Array.from({length: N}, (_, index) => N - index);
    return list.reduce((prev, curr) => prev * curr);
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    console.log(Factorial(N));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
