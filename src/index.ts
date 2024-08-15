import * as fs from 'fs';

function times(x: number): number
{
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
}

const combination = (n: number, r: number): number => {
    return (times(n) / (times(r) * times(n - r)) );
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const[n, r] = lines[0].split(' ').map(Number);
    console.log(combination(n, r));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
