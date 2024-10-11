import { promises as fs } from "fs";
import * as path from "path";

interface inputData {
  readonly N: number;
  readonly K: number;
}

const findWays = ({ N, K }: inputData): number => {
  let ways = 0;

  const rangeArray = Array.from({ length: N }, (_, i) => i + 1);
  const validNumbers = new Set(rangeArray);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      const k = K - i - j;
      if (validNumbers.has(k)) {
        ways++;
      }
    }
  }

  return ways;
};

const pareInput = <T extends string>(input: T): inputData => {
  const [N, K] = input.trim().split(" ").map(Number);
  return { N, K };
};

const main = async (): Promise<void> => {
  const inputFilePath = path.join("/app/src/index.txt");
  try {
    const data = await fs.readFile(inputFilePath, "utf-8");
    const inputData = pareInput(data);
    console.log(findWays(inputData));
  } catch (error) {
    console.error(error);
  }
};

main();
