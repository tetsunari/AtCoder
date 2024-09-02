import * as fs from 'fs';

const Frog = (N: number, h: number[]): number => {
    const dp = new Array(N).fill(0);
    dp[1] = Math.abs(h[1] - h[0]);

    for (let i = 2; i < N; i++) {
        dp[i] = Math.min(
            dp[i - 1] + Math.abs(h[i] - h[i - 1]),
            dp[i - 2] + Math.abs(h[i] - h[i - 2])
        );
    }
    return dp[N - 1];
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const h = lines[1].split(' ').map(Number);
    console.log(Frog(N, h));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
