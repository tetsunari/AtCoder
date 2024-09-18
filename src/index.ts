import * as fs from "fs";

const Stady = (N: number, A: number[]): number => {
  if (N === 0) return 0;
  if (N === 1) return A[0];

  let dp: number[] = new Array(N).fill(0);
  dp[0] = A[0];
  dp[1] = Math.max(A[0], A[1]);

  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + A[i]);
  }
  return dp[N - 1];
};

const Main = (input: string): void => {
  const lines = input.trim().split("\n");
  const N = parseInt(lines[0]);
  const A = lines[1].split(" ").map(Number);
  console.log(Stady(N, A));
};

Main(fs.readFileSync("/app/src/index.txt", "utf-8"));
