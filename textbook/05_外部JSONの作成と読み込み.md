# 外部JSONファイルの作成と読み込み

この章では、[Google SpreadSheet](https://www.google.com/intl/ja_jp/sheets/about/)の内容をJSON形式で読み込み、色彩語辞書として利用する方法を解説します。

    追加 : カラー名のみの配列を出力する関数 a69dfc5 2020/02/09 21:28

この章ではこのコミットまでを対象とします。

## JSONとは

[JSON (JavaScript Object Notation)](https://www.json.org/json-ja.html)とは、データ交換フォーマットです。

JavaScriptは外部のプログラムとネットワーク経由でデータのやりとりをします。この際、すべてのデータは一度文字列に変換されます。JavaScriptの変数を直接外部には渡せません。

JSONは「文字列←→変数を格納した[Object](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)」の相互変換の仕組みを定めたフォーマットです。JSONに対応しているプログラム言語なら、たがいにネットワークをまたいでデータ交換ができます。

このJSONを利用すれば、インターネット上に公開されているデータを受け取り、JavaScriptプログラムに反映できます。

またJSONは構文が単純で、人間がそのまま読めます。ファイル形式を学習する必要がないのも利点です。

### package.json

すでにこの講義の範囲で、JSONファイルを扱っています。npmパッケージの管理ファイル`package.json`がJSON形式のファイルです。

npmコマンドは実行されるたびにこの管理ファイルを読み込んで、動作を決定します。package.jsonはnpmコマンドによって読み書きされますが、人間が直接テキストエディターで編集もできます。

## Google SpreadSheetでファイルを作成する

[Google SpreadSheet](https://www.google.com/intl/ja_jp/sheets/about/)で作成したデータは、インターネット経由でJSONとして読み込めます。この講義では、このJSON読み込みの機能を利用して、Google SpreadSheetをJavaScriptから読み込める色彩語辞書にします。

まずはスプレッドシートファイルを作成し、A列に色の名前、B列に色の16進数コードを記入します。このデータは、wikipediaの[Lists of colors](https://en.wikipedia.org/wiki/Lists_of_colors)のページを参照しています。

![](https://www.evernote.com/l/AAmHrx5pKR9K8JE09ITRBd9GlNCT3p9ChbYB/image.png)

1行目のデータはそれぞれの列に何のデータが格納されているかを示すラベルになります。

### Web公開設定

スプレッドシートファイルをWebに公開します。

![](https://www.evernote.com/l/AAlNmRZqR5FM_7mIPkPr1WW8YvHW_qzbNQQB/image.png)

メニューバーの「ファイル」→「ウェブに公開」を選択します。

すると次のようなダイアログが表示されますので、公開をクリックします。

![](https://www.evernote.com/l/AAlC88n-0ldKi7lpQ3TuDd6McDfWDczl1woB/image.png)

![](https://www.evernote.com/l/AAl1jISGJ0tLULJsEfnVmlsB77qZEv7jQ8IB/image.png)

### URLを確認する

スプレッドシートに戻り、URLを確認します。

![](https://www.evernote.com/l/AAnN8TrKYO1InraLrLvDHWa8e3qOnj_hHlwB/image.png)

シートのURLは次のような形式になっています。

    https://docs.google.com/spreadsheets/d/"シート固有のID"/edit#gid=0

このURLを次のように書き換えます。

    https://spreadsheets.google.com/feeds/list/"シート固有のID"/1/public/values?alt=json

このアドレスをWebブラウザーに入力すると、JSONファイルが表示されます。

![](https://www.evernote.com/l/AAkl1GB--rpDN43BUbe1iifziiLsLCcgHLkB/image.png)

## JavaScriptからfetchする

Webブラウザー上でJSONファイルの出力が確認できました。このJSONファイルをJavaScriptから読み込み、整形します。

### fetch

JavaScriptからJSONを受け取る場合、[Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)を使います。

fetchの基本的な使い方は以下のようになります。

```js
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```

出典 : [MDN Web docs Fetchを使う](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

-   URLを指定してfetch関数を実行
-   サーバーからレスポンスが返ってきたら[json関数](https://developer.mozilla.org/ja/docs/Web/API/Body/json)でパース

という手順で処理します。

Google SpreadSheetからJSONを取得するには、次のような処理になります。

```js
const url =
  "https://spreadsheets.google.com/feeds/list/'シート固有のID'/1/public/values?alt=json";

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
```

これでGoogle SpreadSheetから取得したJSONが、コンソールに出力されます。

### データの形式を確認する

Google SpreadSheetから取得したJSONの内容を確認してみます。

レスポンスそのままでは改行コードが省略されており、内容を読み取れません。Visual Studio Codeで新規ファイルを作成し、取得したJSONを貼り付けます。そして`test.json`など任意の名前を付けて保存します。これでVisual Studio CodeがこのファイルをJSONと認識するようになりました。

![](https://www.evernote.com/l/AAlEKlTFV3xOGYuJPpOtA99rst2g4VhkdlIB/image.png)

ファイル上で右クリックし「ドキュメントをフォーマット…」を選びます。

![](https://www.evernote.com/l/AAno90Qn3VtAR5RhsLa_UCX3wx0It3TBNaYB/image.png)

利用可能なフォーマッターの一覧が表示されるので「JSON言語機能」を選択します。

![](https://www.evernote.com/l/AAkTwqXTzWZOUIkc_9XkpDJcfQT1JuYPm8YB/image.png)

インデントや改行コードが追加され、読みやすくなりました。この中から目的のデータを探します。今回はデータの中に特徴的な色の名前が含まれているので、検索ですぐに目的のデータを探せます。

必要なデータは`jsonオブジェクト.feed.entry`に含まれており、それぞれ`gsx$color.$t`と`gsx$hex.$t`で取り出せそうです。

### wordcloud用に加工する

Google SpreadSheetから取得したJSONの構造が理解できたので、次はデータを取り出す関数を作ります。これらの関数は`src/SheetLoader.js`に切り分けて追加します。

`src/SheetLoader.js`には3つの関数が含まれています。

`load`関数はJSONをインターネットから読み込み、レスポンスを変数`entries`に保存します。

`getList`関数は変数`entries`からWordCloud用のlist配列を作成します。前章のgetList関数を置き換えます。

`getColor`関数は色名を色の16進数コードに変換します。この関数は[wordcloud2.jsのAPIドキュメント](https://github.com/timdream/wordcloud2.js/blob/gh-pages/API.md#presentation)を確認すると`callback(word, weight, fontSize, distance, theta)`という引数が使えます。この引数のうち今回はwordのみを使用しています。この関数も前章の同名の関数を置き換えます。

## テスト

これらの関数を`src/index.js`から読み込みます。

![](https://www.evernote.com/l/AAkxra6voVZOWKrlrafQvyaEkrjo_PjQIPIB/image.png)

色名と色データの反映が確認できました。

* * *

## 解説

この章であつかったJavaScriptコードのうち、ES6以降で採用された比較的新しい記法の解説をします。この項目はオプションです。コードをより深く理解したい時に読んでください。

### 反復メソッド

`src/SheetLoader.js`では、`array.find()`や`array.map()`といった関数が使われています。こうした配列操作の関数を[反復メソッド](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods)といいます。ES6(ES2015)で追加された関数です。

ES6以前のJavaScriptでは、配列を走査して処理をする場合、forループを使いました。

```js
for(var i=0; i < array.length; i++){
  array[i] = ...
}
```

forループは、あらゆる処理ができてしまいました。

-   配列のそれぞれの値を変化させる
-   配列の合計値を取る
-   配列から特定の値を取り出す
-   配列自体の長さを変化させる

あらゆる処理ができるため、forループがコード中に現れた場合、チェック担当者はどのような狙いがあるのかを読み取る必要があります。読み取りの難しさはデバッグの工数を増やし、バグの温床となります。

ES6ではできることを制限した記法や関数が導入されました。`let`や`const`は`ver`より機能を制限し、コードの読みやすさとバグの発見しやすさを向上させました。反復メソッドもこの方針に沿って追加された関数です。

例として[map](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)は、配列のそれぞれの要素に処理を加えて、新しい配列を返す関数です。この関数は元の関数を破壊せず、配列のコピーを作成します。またオプションを追加しない限り、配列の前後の値は参照しません。map関数を使えば、配列の前後の値に関係ないコードだという狙いが伝わります。

[find](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find)は配列の中から条件にあう要素をひとつだけ取り出します。この関数も元の関数を破壊しません。

反復メソッドで、関数とその狙いを結びつけられます。

-   配列のそれぞれの値を変化させる → map
-   配列の合計値を取る → reduce
-   配列から特定の値を取り出す → find
-   配列自体の長さを変化させる → popやpushなどの変更メソッドを使う

また、近年活発に利用されているテスト自動化と、元の関数を破壊しない反復メソッドは相性が良いです。テストしやすい関数を作るためには、反復メソッドを積極的に利用しましょう。

### await / async

JavaScriptを利用する場合、もっとも処理時間を必要とするのが外部データの読み書きです。たとえばデータベースから必要なデータを読み込むなど、ディスクアクセスが必要になる処理は待ち時間が必要になります。また、ネットワーク越しにデータを読み込む場合にも接続と転送の待ち時間が生まれます。

JavaScriptでは、このような待ち時間を有効活用するために、非同期処理という仕組みを利用します。待ち時間の間は他の処理を行いCPUと回線を最大限利用し続けます。

従来のJavaScriptでは、非同期処理には[コールバック関数](https://developer.mozilla.org/ja/docs/Glossary/Callback_function)を利用していました。非同期処理を行う関数に、完了後に処理してほしい関数そのものを渡すという方法です。しかし、この方法はコードの可読性や管理に問題がありました。[Callback Hell（コールバック地獄）](https://techblog.yahoo.co.jp/javascript/nodejs/callback-to-promise/)と呼ばれる問題です。

そこで追加されたのが[Promise](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises)です。Promiseは非同期処理の処理状態を持つオブジェクトで、ES6(ES2015)で追加されました。コールバック関数は相手に関数を渡しましたが、Promiseはこちらにオブジェクトが返ってきます。コールバック関数よりもコードの管理がしやすくなりました。

[await / async](https://wiki.developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function)は非同期関数といいます。Promiseをより簡単に記述するためにES2017で追加された文法です。処理はPromiseとまったく同じですが、それをより短く記述するための文法です。

* * *

## 応用

### 他に利用できるオープンデータはないか？

インターネット上には、自由に利用可能なオープンデータが数多く公開されています。自治体は統計情報をオープンデータとして公開しています。大学などの研究機関も研究利用可能な情報をオープンデータ化しています。他にもどのような情報が公開されているか調べてみましょう。
