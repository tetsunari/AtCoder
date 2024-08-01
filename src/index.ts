import * as fs from 'fs';

const isPrimeNumber = (N: number): boolean => {
    if (N <= 1) return false;
    if (N <= 3) return true;
    if (N % 2 === 0 || N % 3 === 0) return false;

    for (let i = 5; i * i <= N; i += 6) {
        if (N % i === 0 || N % (i + 2) === 0) return false;
    }
    return true;
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    console.log(isPrimeNumber(N) ? 'Yes' : 'No');
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
