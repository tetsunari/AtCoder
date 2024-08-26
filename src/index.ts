import * as fs from 'fs';

const calcExpectedScore = (N: number): number => {
    let expectedScore = 0;
    for (let i = 1; i <= N; i++) {
        expectedScore += N / i;
    }
    return expectedScore;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    console.log(calcExpectedScore(N).toFixed(6));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
