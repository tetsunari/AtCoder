import * as fs from 'fs';

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const nums = lines.slice(1).map(Number);

    const unique = [...new Set(nums)];

    console.log(unique.length);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
