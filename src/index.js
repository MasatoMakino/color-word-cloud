import * as WordCloud from "wordcloud";

const getList = () => {
  return [
    ["foo", 64],
    ["bar", 48]
  ];
};

WordCloud(document.getElementById("cloud_canvas"), {
  list: getList()
});
