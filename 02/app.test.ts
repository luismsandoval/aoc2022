import { rockPaperScissors, rockPaperScissors2 } from "./app";
const data = require("./data");

const parsedData = data.split("\n");

describe("aoc", () => {
  it("rock paper scissors", () => {
    console.log(parsedData);
    console.log(rockPaperScissors(parsedData));
  });

  it("rock paper scissor 2", () => {
    console.log(rockPaperScissors2(parsedData));
  });
});
