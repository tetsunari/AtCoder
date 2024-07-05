import * as fs from 'fs';

const Main = (input: string) => {
    const data = input;

    const lines = data.split('\n');

    const a = parseInt(lines[0]);
    const [b, c] = lines[1].split(' ').map(Number);
    const s = lines[2];

    console.log(`${a + b + c} ${s}`);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
