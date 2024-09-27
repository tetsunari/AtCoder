import * as fs from "fs";

interface Input {
  N: number;
  K: number;
  P: number[];
  Q: number[];
}

type inputFromFile = string | number;

const findK = ({ K, P, Q }: Input): boolean => {
  const setQ = new Set(Q);
  return P.some((p) => setQ.has(K - p));
};

const parseInput = (input: inputFromFile): Input => {
  const [firstLine, SecondLine, ThrdLine] = input.toString().trim().split("\n");
  const [N, K] = firstLine.split(" ").map(Number);
  const P = SecondLine.split(" ").map(Number);
  const Q = ThrdLine.split(" ").map(Number);
  return { N, K, P, Q };
};

const Main = (input: string): void => {
  const parsedInput = parseInput(input);
  console.log(findK(parsedInput) ? "Yes" : "No");
};

const inputFilePath = "/app/src/index.txt";

fs.readFile(inputFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  Main(data);
});
