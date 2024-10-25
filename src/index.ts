import * as fs from 'fs';
import * as path from 'path';

interface InputData {
  N: number;
  A: number[];
  D: number;
  ranges: { L: number, R: number }[];
}

const parseInput = (data: string): InputData => {
  const lines = data.trim().split('\n');
  const N = parseInt(lines[0]);
  const A = lines[1].split(' ').map(Number);
  const D = parseInt(lines[2]);
  const ranges = lines.slice(3).map(line => {
    const [L, R] = line.split(' ').map(Number);
    return { L, R };
  });
  return { N, A, D, ranges };
};

class SegmentTree {
  private tree: number[];
  private n: number;

  constructor(arr: number[]) {
    this.n = arr.length;
    this.tree = new Array(2 * this.n);
    this.build(arr);
  }

  private build(arr: number[]): void {
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = Math.max(this.tree[i * 2], this.tree[i * 2 + 1]);
    }
  }

  query(left: number, right: number): number {
    left += this.n;
    right += this.n;
    let maxVal = 0;
    while (left < right) {
      if (left % 2 === 1) {
        maxVal = Math.max(maxVal, this.tree[left]);
        left++;
      }
      if (right % 2 === 1) {
        right--;
        maxVal = Math.max(maxVal, this.tree[right]);
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }
    return maxVal;
  }
}

const findMax = (N: number, A: number[], ranges: { L: number, R: number }[]): number[] => {
  const segmentTree = new SegmentTree(A);
  const results: number[] = [];
  for (const { L, R } of ranges) {
    const maxLeft = L > 1 ? segmentTree.query(0, L - 1) : 0;
    const maxRight = R < N ? segmentTree.query(R, N) : 0;
    results.push(Math.max(maxLeft, maxRight));
  }
  return results;
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.promises.readFile(filePath, "utf-8");
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    const result = findMax(inputData.N, inputData.A, inputData.ranges);
    console.log(result.join("\n"));
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main().catch(error => console.error("Uncaught error:", error));
