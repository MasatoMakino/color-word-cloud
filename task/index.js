import { load, getColorNames } from "../src/SheetLoader";
import { interestOverTime } from "google-trends-api";

async function getTrend(words) {
  words = ["IVORY", ...words];
  console.log(words);

  return new Promise((resolve, reject) =>
    interestOverTime({ keyword: words })
      .then(results => {
        return JSON.parse(results).default.averages;
      })
      .then(averages => {
        const correction = 100 / averages[0];
        const resultSet = words.map((name, index) => {
          return [name, averages[index] * correction];
        });
        console.log(resultSet);
        resolve(resultSet);
      })
      .catch(e => {
        console.log(e);
      })
  );
}

async function main() {
  await load();
  const words = getColorNames();

  const n = 4;
  while (0 < words.length) {
    await getTrend(words.splice(0, n));
  }
}

main();
