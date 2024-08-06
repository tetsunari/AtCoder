import * as fs from 'fs';

const Gcd = (A: number, B: number): number => {
    console.log(A, B);
    while (B !== 0) {
        const ret = A % B;
        A = B;
        B = ret;
    }
    return A;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    const A = lines[1].split(' ').map(Number);
    console.log(A.reduce((acc, val) => Gcd(acc, val)));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
