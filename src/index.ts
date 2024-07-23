import * as fs from 'fs';

class SegmentTree {
    private tree: number[];
    private n: number;

    constructor(arr: number[]) {
        this.n = arr.length;
        this.tree = new Array(2 * this.n).fill(0);
        this.build(arr);
    }

    private build(arr: number[]) {
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i];
        }
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    update(index: number, value: number) {
        index += this.n;
        this.tree[index] += value;
        while (index > 1) {
            index = Math.floor(index / 2);
            this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
        }
    }

    query(left: number, right: number): number {
        left += this.n;
        right += this.n;
        let sum = 0;
        while (left < right) {
            if (left % 2 === 1) {
                sum += this.tree[left];
                left++;
            }
            if (right % 2 === 1) {
                right--;
                sum += this.tree[right];
            }
            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
        }
        return sum;
    }
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const [N, Q] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);
    const queries = lines.slice(2);

    const segTree = new SegmentTree(arr);

    const results: number[] = [];
    for (const query of queries) {
        const parts = query.split(' ');
        const type = Number(parts[0]);
        if (type === 0) {
            const p = Number(parts[1]);
            const x = Number(parts[2]);
            segTree.update(p, x);
        } else if (type === 1) {
            const l = Number(parts[1]);
            const r = Number(parts[2]);
            results.push(segTree.query(l, r));
        }
    }

    console.log(results.join('\n'));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
