import * as fs from 'fs';

const Gcd = (A: bigint, B: bigint): bigint => {
    while (B !== 0n) {
        const ret = B;
        B = A % B;
        A = ret;
    }
    return A;
};

function findGCD(arr: bigint[]): bigint
{
    return arr.reduce((acc, val) => Gcd(acc, val));
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const A = lines[1].split(' ').map(num => BigInt(num.replace(/,/g, '')));
    const ret = findGCD(A);
    console.log(ret.toString());
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
