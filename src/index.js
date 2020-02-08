import * as WordCloud from "wordcloud";

const getList = () => {
  return [
    ["foo", 64],
    ["bar", 48]
  ];
};

const getColor = () => {
  return "#ff00ff";
};

WordCloud(document.getElementById("cloud_canvas"), {
  list: getList(),
  color: getColor
});
