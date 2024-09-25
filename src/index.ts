import * as fs from "fs";

interface ICaclSquare {
  area(): number;
}

type NumbericInput = number | string;

class calcSquare<T extends NumbericInput> implements ICaclSquare {
  private N: number;
  constructor(N: T) {
    if (typeof N === "string") {
      const paresedValue = parseFloat(N);
      if (isNaN(paresedValue)) {
        throw new Error("Invalid Input");
      }
      this.N = paresedValue;
    } else {
      this.N = N;
    }
  }

  public area(): number {
    return this.N * this.N;
  }
}

const Main = (input: string): void => {
  const lines = input.trim().split("\n");
  const N: NumbericInput = lines[0];

  try {
    const squareArea = new calcSquare(N);
    console.log(squareArea.area());
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

Main(fs.readFileSync("/app/src/index.txt", "utf-8"));
