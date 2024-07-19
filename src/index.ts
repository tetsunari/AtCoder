import * as fs from 'fs';

const isTravelPlan = (N: number, plan: number[][]): boolean => {
    let t_prev = 0;
    let x_prev = 0;
    let y_prev = 0;

    for (const[t, x, y] of plan) {
        const timeDiff = t - t_prev;
        const distance = Math.abs(x - x_prev) + Math.abs(y - y_prev);

        if (timeDiff < distance || (timeDiff - distance) % 2 !== 0) {
            return false;
        }

        t_prev = t;
        x_prev = x;
        y_prev = y;
    }
    return true;
};

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const S = lines.splice(1).map(line => line.split(' ').map(Number));

    const ret = isTravelPlan(N, S) ? 'Yes' : 'No';
    console.log(ret);
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
