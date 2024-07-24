import * as fs from 'fs';

const sum = (A: number[]): number => {
    return A.reduce((prev,curr,index,array) => {
        return prev + curr;
    });
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const A = lines[0].split(' ').map(Number);
    console.log(sum(A));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
