import * as fs from "fs";

interface IInput {
  N: number;
  X: number;
  A: number[];
}

const containsX = ({ X, A }: IInput): boolean => A.includes(X);

const Main = (input: string): void => {
  const lines = input.trim().split("\n");
  const [N, X] = lines[0].split(" ").map(Number);
  const A = lines[1].split(" ").map(Number);
  const inputData: IInput = { N, X, A };
  const result = containsX(inputData) ? "Yes" : "No";
  console.log(result);
};

Main(fs.readFileSync("/app/src/index.txt", "utf-8"));
