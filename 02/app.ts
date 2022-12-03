export const rockPaperScissors = (data: string[]) => {
  let score = 0;

  for (const round of data) {
    if (round[2] === "X") {
      score += 1;
      if (round[0] === "A") {
        score += 3;
      } else if (round[0] !== "B") {
        score += 6;
      }
    } else if (round[2] === "Y") {
      score += 2;
      if (round[0] === "B") {
        score += 3;
      } else if (round[0] !== "C") {
        score += 6;
      }
    } else if (round[2] === "Z") {
      score += 3;
      if (round[0] === "C") {
        score += 3;
      } else if (round[0] !== "A") {
        score += 6;
      }
    }
  }
  return score;
};

export const rockPaperScissors2 = (data: string[]) => {
  let score = 0;

  for (const round of data) {
    if (round[2] === "X") {
      if (round[0] === "A") {
        score += 3;
      } else if (round[0] === "B") {
        score += 1;
      } else if (round[0] === "C") {
        score += 2;
      }
    } else if (round[2] === "Y") {
      score += 3;
      if (round[0] === "A") {
        score += 1;
      } else if (round[0] === "B") {
        score += 2;
      } else if (round[0] === "C") {
        score += 3;
      }
    } else if (round[2] === "Z") {
      score += 6;
      if (round[0] === "A") {
        score += 2;
      } else if (round[0] === "B") {
        score += 3;
      } else if (round[0] === "C") {
        score += 1;
      }
    }
  }
  return score;
};
