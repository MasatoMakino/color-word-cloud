import * as WordCloud from "wordcloud";
import { load, getColor, getList } from "./SheetLoader";

async function main() {
  await load();
  WordCloud(document.getElementById("cloud_canvas"), {
    list: getList(),
    color: getColor
  });
}
main();
