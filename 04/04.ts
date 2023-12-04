import { sum } from "../utils";

export function scoreScratchCards(input: string) {
  const cards = parseInput(input);

  const scores = cards.map(({ winningNumbers, playerNumbers }) => {
    const winCount = calculateWinCount(winningNumbers, playerNumbers);

    return winCount === 0 ? 0 : Math.pow(2, winCount - 1); // Score doubles for each win
  });
  return sum(scores);
}

export function scoreScratchCardsCorrectly(input: string) {
  const cards = parseInput(input);

  cards.forEach(({ id, winningNumbers, playerNumbers, count }) => {
    const winCount = calculateWinCount(winningNumbers, playerNumbers);
    for (let i = id + 1; i <= id + winCount; i++) {
      const cardToDuplicate = cards.find((card) => card.id === i);
      if (cardToDuplicate) {
        cardToDuplicate.count += count;
      }
    }
  });
  return sum(cards.map(({ count }) => count));
}

function calculateWinCount(winningNumbers: number[], playerNumbers: number[]) {
  return winningNumbers.filter((winningNumber) =>
    playerNumbers.includes(winningNumber),
  ).length;
}

function parseInput(input: string) {
  return input
    .split("\n")
    .filter((l) => l)
    .map((line) => {
      // Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
      const [idString, winningString, playerString] = line.split(/\s*[:|]\s*/);
      const id = Number(idString.replace("Card ", ""));
      const winningNumbers = winningString.split(/\s+/).map(Number);
      const playerNumbers = playerString.split(/\s+/).map(Number);

      return { id, winningNumbers, playerNumbers, count: 1 };
    });
}
