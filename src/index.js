import * as WordCloud from "wordcloud";
import { getMaxListeners } from "cluster";

WordCloud(document.getElementById("cloud_canvas"), {
  list: getList()
});

const getList = () => {
  [
    ["foo", 64],
    ["bar", 48]
  ];
};
