import * as fs from 'fs';

const calcExpectedScore = <T extends number>(A: T[], B: T[]): T => {
    let expectedScoreA = A.reduce((prev: number, curr: number) => prev + (curr / 3), 0 as T);
    let expectedScoreB = B.reduce((prev: number, curr: number) => prev + (curr * 2 / 3), 0 as T);
    return (expectedScoreA + expectedScoreB) as T;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    // const N = Number(lines[0]);
    const A = lines[1].split(' ').map(Number);
    const B = lines[2].split(' ').map(Number);
    console.log(calcExpectedScore(A, B).toFixed(3));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
