let trends;
const url = "trend.json";

export async function loadTrends() {
  return fetch(url, {})
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      trends = json;
    })
    .catch(function (err1) {
      console.log("err=" + err1);
    });
}

export function getList(scale = 1.0, maxSize = 320) {
  return trends.map((color) => {
    const size = Math.min(maxSize, color[1] * scale);
    return [color[0], size];
  });
}
