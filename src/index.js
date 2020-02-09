import * as WordCloud from "wordcloud";
import { load } from "./SheetLoader";

const getList = () => {
  return [
    ["foo", 64],
    ["bar", 48]
  ];
};

const getColor = () => {
  return "#ff00ff";
};

load();

WordCloud(document.getElementById("cloud_canvas"), {
  list: getList(),
  color: getColor
});
