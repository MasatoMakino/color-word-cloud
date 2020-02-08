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

const url =
  "https://spreadsheets.google.com/feeds/list/1uGluGMd7v8Dujez_u903wKAvtufwCLL178AYL9bdpOY/1/public/values?alt=json";

fetch(url, {})
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json.feed.entry);
  })
  .catch(function(err1) {
    console.log("err=" + err1);
  });

WordCloud(document.getElementById("cloud_canvas"), {
  list: getList(),
  color: getColor
});
