import * as fs from 'fs';

const Gcd = (A: number, B: number): number => {
    while (B !== 0) {
        const ret = A % B;
        A = B;
        B = ret;
    }
    return A;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const [A, B] = lines[0].split(' ').map(Number);
    console.log(Gcd(A, B));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
