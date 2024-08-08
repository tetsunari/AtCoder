import * as fs from 'fs';

interface Card {
    [key: string]: number
};

class chooseWay {
    private card: Card;
    private colorValue: Card;

    constructor() {
        this.card = {red: 0, yellow: 0, blue: 0};
        this.colorValue = {red: 1, yellow: 2, blue: 3};
    }

    public setCard(N: number, A: number[]): number
    {
        for (let i = 0; i < N; i++) {
            if (A[i] === this.colorValue.red) {
                this.card.red += 1;
            }
            if (A[i] === this.colorValue.yellow) {
                this.card.yellow += 1;
            }
            if (A[i] === this.colorValue.blue) {
                this.card.blue += 1;
            }
        }

        return this.combine(this.card);
    }

    private combine(card: Card): number
    {
        const redPair = card.red * (card.red - 1) / 2;
        const yellowPair = card.yellow * (card.yellow - 1) / 2;
        const bluePair = card.blue * (card.blue - 1) / 2;
        return redPair + yellowPair + bluePair;
    }
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const A = lines[1].split(' ').map(Number);
    const ChooseWay = new chooseWay();
    console.log(ChooseWay.setCard(N, A));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
