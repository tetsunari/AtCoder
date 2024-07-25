import * as fs from 'fs';

class CountMultiples {
    private N: number;
    private X: number;
    private Y: number;

    constructor(data: number[]) {
        [this.N, this.X, this.Y] = data;
    }

    private gcd(a: number, b: number): number {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    private lcm(a: number, b: number): number {
        return a * (b / this.gcd(a, b));
    }

    exec(): number {
        const countX = Math.floor(this.N / this.X);
        const countY = Math.floor(this.N / this.Y);
        const lcm = this.lcm(this.X, this.Y);
        const countXY = Math.floor(this.N / lcm);
        return countX + countY - countXY;
    }
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const data = lines[0].split(' ').map(Number);
    const math = new CountMultiples(data);
    console.log(math.exec());
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
