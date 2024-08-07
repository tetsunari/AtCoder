import * as fs from 'fs';

const Gcd = (A: bigint, B: bigint): bigint => {
    while (B !== 0n) {
        const ret = B;
        B = A % B;
        A = ret;
    }
    return A;
};

const Lcm = (a: bigint, b: bigint): bigint => {
    return (a / Gcd(a, b)) * b;
}

function findLcm(arr: bigint[]): bigint
{
    return arr.reduce((acc, val) => Lcm(acc, val));
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const A = lines[1].split(' ').map(num => BigInt(num.replace(/,/g, '')));
    console.log(findLcm(A).toString());
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
