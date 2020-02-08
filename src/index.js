import * as WordCloud from "wordcloud";

WordCloud(document.getElementById("cloud_canvas"), {
  list: getList()
});

const getList = () => {
  [
    ["foo", 64],
    ["bar", 48]
  ];
};
