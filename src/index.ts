import * as fs from 'fs';
import * as path from 'path';

interface InputData {
  N: number;
  K: number;
  A: number[];
  B: number[];
  C: number[];
  D: number[];
}

const canSumTok = (inputData: InputData): boolean => {
  const sumAB = new Set<number>();

  for (let i = 0; i < inputData.N; i++) {
    for (let j = 0; j < inputData.N; j++) {
      sumAB.add(inputData.A[i] + inputData.B[j]);
    }
  }

  for (let i = 0; i < inputData.N; i++) {
    for (let j = 0; j < inputData.N; j++) {
      const sum = inputData.C[i] + inputData.D[j];
      if (sumAB.has(inputData.K - sum)) {
        return true;
      }
    }
  }

  return false;
};

const parseInput = (data: string): InputData => {
  const lines = data.trim().split('\n');
  const [N, K] = lines[0].split(' ').map(Number);
  const [A, B, C, D] = lines.slice(1).map(line => line.split(' ').map(Number));
  return { N, K, A, B, C, D };
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.promises.readFile(filePath, "utf-8");
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    console.log(canSumTok(inputData) ? "Yes" : "No");
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main();
