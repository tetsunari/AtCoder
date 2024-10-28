import * as fs from 'fs';
import * as path from 'path';

interface InputData {
  N: number;
  X: number;
  A: number[];
}

const binarySearch = (N: number, X: number, A: number[]): number => {
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (A[mid] === X) {
      return mid + 1;
    } else if (A[mid] < X) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const parseInput = (data: string): InputData => {
  const lines = data.trim().split('\n');
  const [N, X] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);
  return { N, X, A };
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.promises.readFile(filePath, "utf-8");
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    const ret = binarySearch(inputData.N, inputData.X, inputData.A);
    console.log(ret);
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main();
