import * as fs from 'fs';

type Query = [number, number, number];

class UnionFind {
    private parent: number[];
    private rank: number[];

    constructor(size: number) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(0);
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x: number, y: number): void {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }

    connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const [N, Q] = lines[0].split(' ').map(Number);
    const queries: Query[] = lines.slice(1).map(line => line.split(' ').map(Number) as Query);

    const uf = new UnionFind(N);
    const results = [];

    for (const [t, u, v] of queries) {
        if (t === 0) {
            uf.union(u, v);
        } else if (t === 1) {
            results.push(uf.connected(u, v) ? '1' : '0');
        }
    }

    console.log(results.join('\n'));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
