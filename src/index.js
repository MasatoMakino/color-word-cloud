import * as WordCloud from "wordcloud";
import { load, getColor } from "./SheetLoader";
import { loadTrends, getList } from "./ListLoader";

async function main() {
  await load();
  await loadTrends();

  WordCloud(document.getElementById("cloud_canvas"), {
    list: getList(0.05),
    color: getColor,
    backgroundColor: "#444",
    minSize: 1.0
  });
}
main();
