import { calorieCount, list, topThree } from "./app";

const list2 = [
  [1],
  [2, 3, 4, 5],
  [10, 20, 5],
  [100],
  [5, 6, 7, 8, 9],
  [1, 2, 3, 4],
  [4, 4, 5, 6],
  [7],
  [1000],
];

describe("aoc", () => {
  it("can count calories", () => {
    console.log(calorieCount(list));
  });

  it("can find the top three", () => {
    console.log(topThree(list));
  });
});
