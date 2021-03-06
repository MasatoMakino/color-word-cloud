import fetch from "node-fetch";

let entries;
const url =
  "https://spreadsheets.google.com/feeds/list/1uGluGMd7v8Dujez_u903wKAvtufwCLL178AYL9bdpOY/1/public/values?alt=json";

export async function load() {
  return new Promise((resolve, reject) => {
    fetch(url, {})
      .then(response => {
        return response.json();
      })
      .then(json => {
        entries = json.feed.entry;
        resolve();
      })
      .catch(function(err1) {
        console.log("err=" + err1);
      });
  });
}

export function getColor(word, weight, fontSize, distance, theta) {
  const colorList = entries.find(entry => {
    return entry.gsx$color.$t == word;
  });

  if (colorList) {
    return colorList.gsx$hex.$t;
  }
  return "#330033";
}

export function getList() {
  return entries.map(entry => {
    return [entry.gsx$color.$t, 64];
  });
}

export function getColorNames() {
  return entries.map(entry => {
    return entry.gsx$color.$t;
  });
}
