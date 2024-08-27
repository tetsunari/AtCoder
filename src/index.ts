import * as fs from 'fs';

const mergeSort = (A: number[]): number[] => {
    if (A.length <= 1) {
        return A;
    }

    const middle = Math.floor(A.length / 2);
    const left = A.slice(0, middle);
    const right = A.slice(middle);

    return mergeList(mergeSort(left), mergeSort(right));
}

const mergeList = (left: number[], right: number[]): number[] => {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const Main = (input: string): void => {
    const lines = input.trim().split('\n');
    const A = lines[1].split(' ').map(Number);
    console.log(mergeSort(A).join(' '));
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
