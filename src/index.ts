import * as fs from 'fs';

const Main = (input: string) => {
    const data = input;

    const lines = data.split('\n');

    const [a, b] = lines[0].split(' ').map(Number);
    let c = '';
    if (a * b % 2 === 0) {
        c = 'Even';
    } else {
        c = 'Odd';
    }

    console.log(c);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
