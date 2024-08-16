import * as fs from 'fs';

const countPairs = (N: number, A: number[]): number => {
    const counts = new Map<number, number>();

    for (let i = 0; i < N; i++) {
        const value = A[i];
        if (counts.has(value)) {
            counts.set(value, counts.get(value)! + 1);
        } else {
            counts.set(value, 1);
        }
    }

    let pairs = 0;
    for (const [value, count] of counts.entries()) {
        const complement = 100000 - value;
        if (counts.has(complement)) {
            if (value === complement) {
                pairs += (count * (count - 1)) / 2;
            } else if (value < complement) {
                pairs += count * counts.get(complement)!;
            }
        }
    }
    return pairs;
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    const A = lines[1].split(' ').map(Number);
    console.log(countPairs(N, A));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
