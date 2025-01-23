import * as fs from 'fs';
import * as path from 'path';

interface InputData {
  N: number;
  A: number;
};

const calc = (inputData: InputData): number => {
  const { N, A } = inputData;
  const sum = (N + A);
  return sum * sum;
}

const parseInput = (data: string): InputData => {
  const lines = data.trim().split('\n');
  const [N, A] = lines[0].split(' ').map(Number);
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
    console.log(calc(inputData));
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main();
