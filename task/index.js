import fs from "fs";
import { load, getColorNames } from "../src/SheetLoader";
import { interestOverTime } from "google-trends-api";

async function getTrend(words) {
  words = ["IVORY", ...words];

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

  let result = [];
  const n = 4;
  while (0 < words.length) {
    const trends = await getTrend(words.splice(0, n));
    console.log(trends);
    result = result.concat(trends.slice(1));
  }

  const json = JSON.stringify(result);
  fs.writeFileSync("./docs/trend.json", json);
}

main();
