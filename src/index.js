import * as WordCloud from "wordcloud";

WordCloud(document.getElementById("cloud_canvas"), {
  list: [
    ["foo", 64],
    ["bar", 48]
  ]
});

console.log("hello world");
