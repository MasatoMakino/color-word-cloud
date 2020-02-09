const url =
  "https://spreadsheets.google.com/feeds/list/1uGluGMd7v8Dujez_u903wKAvtufwCLL178AYL9bdpOY/1/public/values?alt=json";

export async function load() {
  return new Promise((resolve, reject) => {
    fetch(url, {})
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json.feed.entry);
        resolve();
      })
      .catch(function(err1) {
        console.log("err=" + err1);
      });
  });
}
