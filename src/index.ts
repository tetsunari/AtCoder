import * as fs from 'fs';

const PrintPrimeNumbers = (N: number): number[] => {
    const isPrime: boolean[] = Array(N + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= N; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= N; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes: number[] = [];
    for (let i = 2; i <= N; i++) {
        if(isPrime[i]) {
            primes.push(i);
        }
    }
    return primes;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    console.log(PrintPrimeNumbers(N).join(' '));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
