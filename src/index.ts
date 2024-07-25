import * as fs from 'fs';

class Math<T>{
    private N: T;
    private times: number;
    private add: number;

    constructor(N: T) {
        this.N = N;
        this.times = 2;
        this.add = 3;
    }

    exec(): number {
        return (Number(this.N) * this.times) + this.add;
    }
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const math = new Math<String>(lines[0]);
    console.log(math.exec());
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
