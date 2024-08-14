import * as fs from 'fs';

const chooseWay = (A: number[]): number => {
    const combinations = <T>(arr: T[], k: number): T[][] => {
        const result: T[][] = [];
        const comb = (start: number, path: T[]) => {
            if (path.length === k) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                path.push(arr[i]);
                comb(i + 1, path);
                path.pop();
            }
            if (start === 0) return;
        };
        comb(0, []);
        return result;
    }

    let count = 0;
    const allCombinations = combinations(A, 5);
    for (const allCombination of allCombinations) {
        if (allCombination.reduce((sum, num) =>  sum + num, 0) === 1000) {
            count++;
        }
    }

    return count;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    // const N = parseInt(lines[0]);
    const A = lines[1].split(' ').map(Number);
    console.log(chooseWay(A));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
