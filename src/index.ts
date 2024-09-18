import * as fs from "fs";

const findX = (X: number, A: number[]): string => {
  return A.includes(X) ? "Yes" : "No";
};

const Main = (input: string): void => {
  const lines = input.trim().split("\n");
  const [N, X]: number[] = lines[0].split(" ").map(Number);
  const A = lines[1].split(" ").map(Number);
  console.log(findX(X, A));
};

Main(fs.readFileSync("/app/src/index.txt", "utf-8"));
