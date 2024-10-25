import { promises as fs } from "fs";
import * as path from "path";

interface SnowInstruction {
  A: number;
  B: number;
  C: number;
  D: number;
};
interface ParsedInput {
  H: number;
  W: number;
  N: number;
  instructions: SnowInstruction[];
};

const calculateSnow = (H: number, W: number, N: number, instructions: SnowInstruction[]): number[][] => {
  const snowGrid: number[][] = Array.from({ length: H }, () => Array(W).fill(0));
  const diff: number[][] = Array.from({ length: H + 1}, () => Array(W + 1).fill(0));

  for (const { A, B, C, D } of instructions) {
    diff[A - 1][B - 1]++;
    if (C < H) diff[C][B - 1]--;
    if (D < W) diff[A - 1][D]--;
    if (C < H && D < W) diff[C][D]++;
  }

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (i > 0) diff[i][j] += diff[i - 1][j];
      if (j > 0) diff[i][j] += diff[i][j - 1];
      if (i > 0 && j > 0) diff[i][j] -= diff[i - 1][j - 1];
      snowGrid[i][j] = diff[i][j];
    }
  }
  return snowGrid;
};

const parseInput = (input: string): ParsedInput => {
  const inputData = input.trim().split("\n");
  const [H, W, N] = inputData[0].split(" ").map(Number);
  const instructions = inputData.slice(1, N + 1).map(data => {
    const [A, B, C, D] = data.split(" ").map(Number);
    return { A, B, C, D };
  });
  return { H, W, N, instructions };
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.readFile(filePath, "utf-8");
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    const result = calculateSnow(inputData.H, inputData.W, inputData.N, inputData.instructions);
    result.forEach(row => console.log(row.join(" ")));
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main().catch(error => console.error("Uncaught error:", error));
