import * as fs from 'fs';
import * as path from 'path';

interface InputData {
  N: number;
  A: number[];
};

const compression = (inputData: InputData): number[] => {
  const { N, A } = inputData;
  const B = Array.from(new Set(A));
  const C = B.sort((a, b) => a - b);
  const indexMap = new Map<number, number>();
  C.forEach((v, i) => indexMap.set(v, i + 1));
  return A.map((a) => indexMap.get(a)!);
}

const parseInput = (data: string): InputData => {
  const lines = data.trim().split('\n');
  const N = parseInt(lines[0]);
  const A = lines[1].split(' ').map(Number);
  return { N, A };
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.promises.readFile(filePath, "utf-8");
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    console.log(compression(inputData).join(' '));
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main();
