# wordcloud2モジュールの導入

この章では、wordcloud2モジュールを導入し、ワードクラウドをブラウザで描画するまでを解説します。

    追加 : 文字色の変更用関数 d6507c6 2020/02/08 21:33

このコミットまでが、この章の対象です。

## モジュールの導入

まず、ワードクラウドを描画するモジュール[wordcloud2](https://github.com/timdream/wordcloud2.js)をインストールします。

```console
npm install --save-dev wordcloud
```

このコマンドを実行すると、npmからモジュールがダウンロード、インストールされます。

`package.json`の`devDependencies`に以下のようにモジュールが追加されていれば、インストールは成功です。

```package.json
  "devDependencies": {
    ...
    "wordcloud": "^1.1.1"
  },
```

## JavaScriptファイルからの呼び出し

npm経由でインストールしたモジュールは、[import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)文をつかってJavaScriptから読み込めます。

```index.js
import * as WordCloud from "wordcloud";
```

import文はJavaScriptファイルを分割管理するための機能です。このimport文にしたがって複数のJavaScriptファイルを1つにまとめ上げるのが、webpackの役割です。

webpackには他にも、cssや画像のまとめ上げの機能もありますが、この講義では取り扱いません。

## データの作成

## 描画

* * *

## 応用

### npmでモジュールを探すためにはどうすればいいか？

### npmでモジュールを公開するためにはどうすればいいか？
