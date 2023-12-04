import { sum } from "../utils";

export function scoreScratchCards(input: string) {
  const cards = parseInput(input);
  let score = 0;

  const scores = cards.map(({ winningNumbers, playerNumbers }) => {
    const winCount = winningNumbers.filter((winningNumber) =>
      playerNumbers.includes(winningNumber),
    ).length;
    return winCount === 0 ? 0 : Math.pow(2, winCount - 1); // Score doubles for each win
  });
  return sum(scores);
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

      return { id, winningNumbers, playerNumbers };
    });
}
