import * as fs from 'fs';

const Brute = (N: number, S: number, data: number[]): boolean => {
    const ret: boolean[][] = Array.from({length: N + 1}, () => Array(S + 1).fill(false));
    ret[0][0] = true;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j <= S; j++) {
            if (ret[i][j]) {
                ret[i + 1][j] = true;
                if (j + data[i] <= S) {
                    ret[i + 1][j + data[i]] = true;
                }
            }
        }
    }
    return ret[N][S];
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const [N, S] = lines[0].split(' ').map(Number);
    const data = lines[1].split(' ').map(Number);
    console.log(Brute(N, S, data) ? 'Yes' : 'No');
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
