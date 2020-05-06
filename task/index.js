import fs from "fs";
import { load, getColorNames } from "../src/SheetLoader";
import { interestOverTime } from "google-trends-api";

/**
 * スリープ処理を行う関数。
 * ループ処理中に任意の時間処理を停止する。
 * @param {number} milliseconds
 */
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getTrend(words) {
  words = ["IVORY", ...words];

  return interestOverTime({ keyword: words })
    .then((results) => {
      return JSON.parse(results).default.averages;
    })
    .then((averages) => {
      const correction = 100 / averages[0];
      const resultSet = words.map((name, index) => {
        return [name, averages[index] * correction];
      });
      return resultSet;
    })
    .catch((e) => {
      console.log(e);
    });
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
    await sleep(1000 * 5);
  }

  const json = JSON.stringify(result);
  fs.writeFileSync("./docs/trend.json", json);
  console.log("trend.jsonの出力が完了しました。");
}

main();
