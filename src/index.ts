import { promises as fs } from "fs";
import * as path from "path";

interface InputData {
  readonly N: number;
  readonly Q: number;
  readonly A: number[];
  readonly queries: Array<[number, number]>;
}

const calculatePrefixSums = (A: number[]): number[] => {
  const prefixSums = new Array(A.length + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    prefixSums[i + 1] = prefixSums[i] + A[i];
  }
  return prefixSums;
};

const findWays = (A: number[], queries: Array<[number, number]>, prefixSums: number[]): number[] => {
  return queries.map(([L, R]) => prefixSums[R] - prefixSums[L - 1]);
};

const parseInput = (input: string): InputData => {
  const inputData = input.trim().split("\n");
  const [N, Q] = inputData[0].split(" ").map(Number);
  const A = inputData[1].split(" ").map(Number);
  const queries: Array<[number, number]> = inputData.slice(2).map(line => {
    const [L, R] = line.split(" ").map(Number);
    return [L, R] as [number, number];
  });

  return { N, Q, A, queries };
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.readFile(filePath, "utf-8");
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    const prefixSums = calculatePrefixSums(inputData.A);
    const results = findWays(inputData.A, inputData.queries, prefixSums);
    console.log(results.join("\n"));
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main().catch(error => console.error("Uncaught error:", error));
