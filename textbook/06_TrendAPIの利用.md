# Google Trends APIを利用する

この章では、Google Trends APIを利用して色彩語の利用頻度を調べます。

    追加 : trend取得処理    47e8eae 2020/02/09 21:30

この章ではこのコミットまでを対象とします。

## Google Trendsとは

[Google Trends](https://trends.google.co.jp/trends/?geo=JP)は、Googleで検索されたワードの出現頻度を、時系列、地域別に比較できるサービスです。特定の地域で注目されている検索ワードや、急激に関心を集めた検索ワードなどが洗い出せます。

![](https://www.evernote.com/l/AAlOcg4mhGhMI4Xccr3XWPKFQc1fgkdEQ14B/image.png)

Webブラウザー上でこのサービスを利用できます。検索ワードを入力して、どのような情報が受け取れるかを確認してみてください。

## google-trends-apiとは

[google-trends-api](https://github.com/pat310/google-trends-api)は、Google Trendsの機能をnode.js上で利用できるようにするnpmパッケージです。このパッケージを利用して、色彩語の利用頻度を調べます。

### 取得できる情報

Google Trendsでは、複数のワードを入力するとそのワード同士の検索頻度を以下の2つの軸で比較できます。

-   時系列
-   地域

また、短期間に急激に注目を集めたワードをランキング形式で取得できます。

### ファイルフォーマット

時系列ごとの注目度を格納したJSONデータを取得できます。

### 制限

注意点として、Google Trendsで取得できる値は絶対値ではなく相対値です。検索ワードのうち、もっとも注目を集めたワードを100として、他はその100に対する相対値が返されます。そのため単純に複数の検索結果を比較できません。

また、一度に検索できるワードの数は5つまでです。6つ以上のワードを一度に比較できません。

google-trends-apiパッケージは、node.js上で動作します。[Webブラウザー上では動作しません。](https://github.com/pat310/google-trends-api/issues/56)そのため、検索結果をファイルに保存してブラウザーに読み込む必要があります。

## node.jsからGoogle Trend APIを利用する

それでは実際にnode.js上でgoogle-trends-apiを操作してみます。

### google-trends-apiパッケージをインストール

google-trends-apiパッケージをインストールします。コンソールに以下のコマンドを入力します。

```console
npm i -D google-trends-api
```

package.jsonのdevDependenciesにパッケージが追加されれば成功です。

### テスト実行

node.jsで実行するJavaScriptファイルは、Webブラウザー用のものとは別に用意します。今回は`task/index.js`というファイルを新規作成しました。

google-trends-apiパッケージのドキュメントから[サンプル](https://github.com/pat310/google-trends-api#input-2)を確認します。

```js
import { interestOverTime } from "google-trends-api";

interestOverTime({keyword: 'Valentines Day'})
.then(function(results){
  console.log(results);
})
.catch(function(err){
  console.error(err);
});
```

import文はnode.jsではそのまま実行できない（注1）ので、このスクリプトもwebpack + babelでトランスパイルします。

`webpack.config.js`を複製して`webpack.node.config.js`を作成します。entry（入力ファイル）とoutput（出力ファイル）の設定を書き換えます。

```js
  entry: "./task/index.js",
  output: {
    path: `${__dirname}/lib`,
    filename: "bundle.js"
  },
```

これで`task/index.js`を読み込み`lib/bundle.js`を出力する設定ができました。

次にコマンドを`package.json`に追加します。

      "scripts": {
        "lib": "webpack --config webpack.node.config.js",
        "trends": "node ./lib/bundle.js"
      }

libコマンドが`lib/bundle.js`をトランスパイルするコマンド、trendsコマンドが`lib/bundle.js`を実行するコマンドです。

trendsコマンドを実行すると、Visual Studio Codeのコンソールに結果が出力されます。正常にGoogle Trendsが利用できていることが確認できました。

* * *

## 注釈

1.node.jsのESM対応は現在進行中です。一部import文を利用できます。
<https://nodejs.org/api/esm.html#esm_import_specifiers>

* * *

## 応用

### 他にも利用できそうなAPIはないか？
