import { sum } from "../utils";

const bagContents = {
  red: 12,
  green: 13,
  blue: 14,
};

export function sumPossibleGames(input: string) {
  const games = parseInput(input);
  const possibleGames = games.filter((game) => {
    return game.grabs.every((grab) => {
      return grab.every(({ amount, type }) => {
        return amount <= bagContents[type];
      });
    });
  });
  return sum(possibleGames.map(({ id }) => id));
}

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
function parseInput(input: string) {
  return input
    .split("\n")
    .filter((l) => l)
    .map((line) => {
      const [gameString, rest] = line.split(": ");
      const gameId = Number(gameString.replace("Game ", ""));
      // 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
      const grabs = rest.split("; ").map((grab) => {
        // 3 blue, 4 red
        const amountsPerType = grab.split(", ").map((amountOfType) => {
          // 3 blue
          const [amount, type] = amountOfType.split(" ");
          return {
            type,
            amount: Number(amount),
          };
        });
        return amountsPerType;
      });

      return { id: gameId, grabs };
    });
}
