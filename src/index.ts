import * as fs from 'fs';

interface Problem {
    P: number,
    Q: number,
};

const calcExpectedScore = (problems: Problem[]): number => {
    let expectedScore = 0;
    for (const problem of problems) {
        expectedScore += problem.Q / problem.P;
    }
    return expectedScore;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    const problems: Problem[] = lines.slice(1, N + 1).map(line => {
        const [P, Q] = line.split(' ').map(Number);
        return {P, Q};
    });
    console.log(calcExpectedScore(problems).toFixed(6));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
