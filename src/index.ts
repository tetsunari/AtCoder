import * as fs from 'fs';

const Brute = ([N, S]: number[]): number => {
    let count = 0;
    for (let i = 1; i <= N; ++i) {
        for (let j = 1; j <= N; ++j) {
            if (i + j > S) {
                break;
            }
            ++count;
        }
    }
    return count;
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const data = lines[0].split(' ').map(Number);
    console.log(Brute(data));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
