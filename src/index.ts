import * as fs from 'fs';

const generatePair = (n: number): string[] => {
    const result: string[] = [];
    const pair = (str: string, open: number, close: number) => {
        if (str.length === n * 2) {
            result.push(str);
            return;
        }
        if (open < n) {
            pair(str + '(', open + 1, close);
        }
        if (close < open) {
            pair(str + ')', open, close + 1);
        }
    };
    pair('', 0, 0);
    return result;
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);

    if (N % 2 !== 0) {
        return;
    }
    const result = generatePair(N / 2);
    result.forEach((ret: string) => console.log(ret));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
