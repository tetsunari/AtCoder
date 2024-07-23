import * as fs from 'fs';

class FruitBasket<T> {
    private apple: number;
    private mandarin: T;

    constructor(mandarin: T) {
        this.apple = 5;
        this.mandarin = mandarin;
    }

    getTotalFruit(): number {
        return this.apple + Number(this.mandarin);
    }
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    const basket = new FruitBasket<number>(N);
    console.log(basket.getTotalFruit());
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
