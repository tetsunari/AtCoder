import * as fs from 'fs';
import * as path from 'path';

interface InputData {
  N: number;
  K: number;
  A: number[];
}

const countPairs = (inputData: InputData): number => {
  let count = 0;
  let j = 0;

  for(let i = 0; i < inputData.N; i++) {
    while(j < inputData.N && inputData.A[j] - inputData.A[i] <= inputData.K) {
      j++;
    }
    count += j - i - 1;
  }

  return count;
}

const parseInput = (data: string): InputData => {
  const lines = data.trim().split('\n');
  const [N, K] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);
  return { N, K, A };
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.promises.readFile(filePath, "utf-8");
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    console.log(countPairs(inputData));
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main();
