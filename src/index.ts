import * as fs from 'fs';

class buyWay{
    private count: {[key: number]: number};

    constructor() {
        this.count = {100: 0, 200: 0, 300: 0, 400: 0};
    }

    public addItem(price: number): void {
        if (this.count[price] !== undefined) {
            this.count[price]++;
        }
    }

    public countWay(): number {
        let way = 0;
        way += this.count[100] * this.count[400];
        way += this.count[200] * this.count[300];
        return way;
    }
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const A = lines[1].split(' ').map(Number);

    const BuyWay = new buyWay();
    for (let i = 0; i <= N; i++) {
        BuyWay.addItem(A[i]);
    }

    console.log(BuyWay.countWay());
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
