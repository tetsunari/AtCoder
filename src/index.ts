import * as fs from 'fs';

const mod = (A: number[]): number => {
    return A.reduce((prev,curr,index,array) => {
        return (prev + curr) % 100;
    });
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const A = lines[1].split(' ').map(Number);
    console.log(mod(A));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
