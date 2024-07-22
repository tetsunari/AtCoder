import * as fs from 'fs';

const isValid = (N: number, L: number, K: number, A: number[], mid: number): boolean => {
    let count = 0;
    let prev = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] - prev >= mid && L - A[i] >= mid) {
            count++;
            prev = A[i];
        }
    }
    return count >= K;
}

const MaxScore = (N: number, L: number, K: number, A: number[]): number => {
    let left = 1;
    let right = L;
    let ans = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (isValid(N, L, K, A, mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const [N, L] = lines[0].split(' ').map(Number);
    const K = Number(lines[1]);
    const A = lines[2].split(' ').map(Number);
    console.log(MaxScore(N, L, K, A));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
