import { promises as fs } from 'fs';
import path from 'path';

interface CalculationResult {
  total: number;
}

const calc = (x: number): CalculationResult => {
  let total = 0;
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (i * j === x) continue;
      total += i * j;
    }
  }
  return { total };
};

const parseInput = (data: string): number => {
  const [firstLine] = data.trim().split('\n');
  const parsed = Number(firstLine);
  if (isNaN(parsed)) {
    throw new Error('Invalid input: not a number');
  }
  return parsed;
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.readFile(filePath, 'utf-8');
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join('/app/src/index.txt');

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    const result = calc(inputData);
    console.log(result.total);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error reading file: ${error.message}`);
    } else {
      console.error('An unexpected error occurred.');
    }
  }
};

main();
