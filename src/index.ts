import * as fs from "fs";

type inputFromFile = string | number;

interface IBinaryConvert {
  fillWithZeros: (binary: string) => string;
  binaryRepresentation: (N: number) => string;
}

class BinaryConverter implements IBinaryConvert {
  fillWithZeros(binary: string): string {
    return binary.padStart(10, "0");
  }

  binaryRepresentation(N: number): string {
    let binary = "";
    while (N > 0) {
      binary = (N % 2) + binary;
      N = Math.floor(N / 2);
    }
    return binary;
  }
}

const parseInput = <T extends inputFromFile>(input: T): number => {
  const inputList = input.toString().trim().split("\n");
  const N = parseInt(inputList[0]);
  return N;
};

const main = (input: string): void => {
  const parsedInput = parseInput(input);
  const converter = new BinaryConverter();
  const binary = converter.binaryRepresentation(parsedInput);
  console.log(converter.fillWithZeros(binary));
};

const inputFilePath = "/app/src/index.txt";

fs.readFile(inputFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  main(data);
});
