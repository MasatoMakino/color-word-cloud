# wordcloud2モジュールの導入

この章では、wordcloud2モジュールを導入し、ワードクラウドをブラウザで描画するまでを解説します。

    追加 : 文字色の変更用関数 d6507c6 2020/02/08 21:33

このコミットまでが、この章の対象です。

## モジュールの導入

まず、ワードクラウドを描画するモジュール[wordcloud2](https://github.com/timdream/wordcloud2.js)をインストールします。

```console
npm install --save-dev wordcloud
```

Visual Studio Codeのターミナルでこのコマンドを実行すると、npmサーバーからモジュールがダウンロード、インストールされます。

`package.json`の`devDependencies`に以下のようにモジュールが追加されていれば、インストールは成功です。

```package.json
  "devDependencies": {
    ...
    "wordcloud": "^1.1.1"
  },
```

## JavaScriptファイルからの呼び出し

npm経由でインストールしたモジュールは、[import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)文をつかってJavaScriptから読み込めます。

```js
import * as WordCloud from "wordcloud";
```

import文はJavaScriptファイルを分割管理するための機能です。このimport文にしたがって複数のJavaScriptファイルを1つにまとめ上げるのが、webpackの役割です。

webpackには他にも、cssや画像のまとめ上げの機能もありますが、この講義では取り扱いません。

## Canvasエレメントの追加

`index.html`のbody内に[Canvas](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API)エレメントを追加します。

```html
<body>
    <canvas id="cloud_canvas" width="640" height="480"></canvas>
</body>
```

CanvasはJavaScriptで操作可能なビットマップ画像です。htmlやcssのレンダリングとは別に、ピクセル単位で自由な描画ができます。

## データの作成

wordcloud2の[Simple usage](https://github.com/timdream/wordcloud2.js#simple-usage)に、描画用データの形式が指定されています。

```js
WordCloud(document.getElementById('my_canvas'), { list: list } )
```

> where list is an array that look like this: \[['foo', 12], ['bar', 6]].

リストデータは`[['表示名', サイズ], ['表示名', サイズ]]`という配列で指定するようです。リストデータを返す関数を`index.js`に追加します。

```js
const getList = () => {
  return [
    ["foo", 64],
    ["bar", 48]
  ];
};

WordCloud(document.getElementById("cloud_canvas"), {
  list: getList()
});
```

これで`cloud_canvas`エレメントに描画をする準備ができました。

## 描画

この状態でLive Serverを起動して、動作を確認してみます。

![](https://www.evernote.com/l/AAkmBoN40yxI7Ld4AviCSDW8V0rbdLyOluYB/image.png)

再読み込みするたびに色がランダムに変わります。
wordcloud2では、リストデータ内には色の情報を持たせられません。
個別の単語に色を指定する場合、色を返す関数を用意します。

### 色指定

色を返す関数`getColor`を追加します。

```js
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

```

この関数は単純に#ff00ff（マゼンタ）を返すだけのものです。

![](https://www.evernote.com/l/AAn49WnuE4ZGMLHPni71ClTaA9bWXxe3cn8B/image.png)

文字が指定された色に変化しました。
これで色彩語に個別の色を指定する準備ができました。

* * *

## 応用

### npmでモジュールを探すためにはどうすればいいか？

### npmでモジュールを公開するためにはどうすればいいか？
