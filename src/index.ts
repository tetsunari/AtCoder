import * as fs from 'fs';
import * as path from 'path';

interface InputData {
  N: number;
  K: number;
  A: number[];
}

function findKthFlyerTime(inputData: InputData): number {
  const countFlyers = (time: number): number => {
    let total = 0;
    for (const a of inputData.A) {
      total += Math.floor(time / a);
    }
    return total;
  };

  let left = 0;
  let right = Math.max(...inputData.A) * inputData.K;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (countFlyers(mid) < inputData.K) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
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
    console.log(findKthFlyerTime(inputData));
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main();
