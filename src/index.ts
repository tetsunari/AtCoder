import * as fs from 'fs';

const chooseWay = (A: number[]): number => {
    const dp: number[][] = Array.from({length: 6}, () => Array(1001).fill(0));
    console.log(dp);
    dp[0][0] = 1;

    for (let card of A) {
        for (let i = 5; i >= 1; i--) {
            for (let j = 1000; j >= card; j--) {
                dp[i][j] += dp[i - 1][j - card];
            }
        }
    }
    return dp[5][1000];
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    // const N = parseInt(lines[0]);
    const A = lines[1].split(' ').map(Number);
    console.log(chooseWay(A));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
