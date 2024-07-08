import * as fs from 'fs';

const Main = (input: string) => {
    const data = input;

    const lines = data.split('\n');

    const a = lines[0].split('');

    let b = 0;
    a.forEach(v => {
        if (parseInt(v) === 1) {
            b++;
        }
    });
    console.log(b);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
