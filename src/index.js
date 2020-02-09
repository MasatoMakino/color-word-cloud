import * as WordCloud from "wordcloud";
import { load, getColor } from "./SheetLoader";

const getList = () => {
  return [
    ["IVORY", 64],
    ["CREAM", 48]
  ];
};

async function main() {
  await load();
  WordCloud(document.getElementById("cloud_canvas"), {
    list: getList(),
    color: getColor
  });
}
main();
