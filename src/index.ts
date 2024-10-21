import { promises as fs } from "fs";
import * as path from "path";

interface InputData {
  readonly D: number;
  readonly N: number;
  readonly queries: Array<[number, number]>;
}

const findAttendances = (inputData: InputData): number[] => {
    const attendances = new Array<number>(inputData.D).fill(0);

    for (const [L, R] of inputData.queries) {
      attendances[L - 1]++;
      if (R < inputData.D) {
        attendances[R]--;
      }
    }

    for (let i = 1; i < inputData.D; i++) {
        attendances[i] += attendances[i - 1];
    }
    return attendances;
}

const parseInput = (input: string): InputData => {
  const [D, N, ...queries] = input.trim().split("\n");
  return {
    D: parseInt(D),
    N: parseInt(N),
    queries: queries.map(query => query.split(" ").map(Number) as [number, number]),
  };
};

const readFileAsync = async (filePath: string): Promise<string> => {
  return fs.readFile(filePath, "utf-8");
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");

  try {
    const data = await readFileAsync(inputFilePath);
    const inputData = parseInput(data);
    const attendances = findAttendances(inputData);
    console.log(attendances.join("\n"));
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

main().catch(error => console.error("Uncaught error:", error));
