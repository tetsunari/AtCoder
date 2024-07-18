import * as fs from 'fs';

const canFormString = (S: string): boolean => {
    const words = ['dream', 'dreamer', 'erase', 'eraser'];
    let T = S;

    while (T.length > 0) {
        let matched = false;
        for (const word of words) {
            if (T.endsWith(word)) {
                T = T.slice(0, -word.length);
                matched = true;
                break;
            }
        }
        if (!matched) {
            return false;
        }
    }
    return true;
}

const Main = (input: string): void => {
    const S = input.trim();
    const result = canFormString(S);
    console.log(result ? 'YES' : 'NO');
}

Main(fs.readFileSync('/app/src/index.txt', 'utf-8'));
