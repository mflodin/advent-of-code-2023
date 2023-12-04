import { sum } from "../utils";

export function sumPartNumbers(input: string) {
  const { numbers, symbols } = parseInput(input);

  const partNumbers = numbers.filter(({ start, end, lineIndex }) => {
    return symbols.some((symbol) => {
      return (
        // Even though the symbol can't be in the position of the number itself,
        // we can just check that the position is somewhere in the box of the number
        // padded by 1 on each side
        symbol.lineIndex >= lineIndex - 1 &&
        symbol.lineIndex <= lineIndex + 1 &&
        symbol.position >= start - 1 &&
        symbol.position <= end + 1
      );
    });
  });

  return sum(partNumbers.map(({ number }) => number));
}

export function sumGearRatio(input: string) {
  const { numbers, symbols } = parseInput(input);
  const stars = symbols.filter(({ symbol }) => symbol === "*");
  let gearRatioSum = 0;

  stars.forEach((star) => {
    const potentialGearNumbers = numbers.filter(({ start, end, lineIndex }) => {
      return (
        star.lineIndex >= lineIndex - 1 &&
        star.lineIndex <= lineIndex + 1 &&
        star.position >= start - 1 &&
        star.position <= end + 1
      );
    });

    if (potentialGearNumbers.length === 2) {
      gearRatioSum +=
        potentialGearNumbers[0].number * potentialGearNumbers[1].number;
    }
  });

  return gearRatioSum;
}

type ParsedNumber = {
  start: number;
  end: number;
  number: number;
  lineIndex: number;
};

type ParsedSymbol = {
  position: number;
  symbol: string;
  lineIndex: number;
};

function parseInput(input: string) {
  let numbers: ParsedNumber[] = [];
  let symbols: ParsedSymbol[] = [];
  const partNumbers = input.split("\n").forEach((line, lineIndex) => {
    const numbersRegex = /\d+/g;

    let numberMatch;
    while ((numberMatch = numbersRegex.exec(line))) {
      const start = numberMatch.index;
      const [numberString] = numberMatch;
      const end = start + numberString.length - 1;
      const number = Number(numberString);
      numbers.push({ start, end, number, lineIndex });
    }

    const symbolsRegex = /[^\d\.]+/g;
    let symbolMatch;
    while ((symbolMatch = symbolsRegex.exec(line))) {
      const position = symbolMatch.index;
      const [symbol] = symbolMatch;
      symbols.push({ position, symbol, lineIndex });
    }
  });

  return { numbers, symbols };
}
