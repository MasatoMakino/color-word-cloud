# color-word-cloud

> word cloud generator for color words.

Google Trends APIを利用した、色彩語ワードクラウドジェネレーターです。

## デモページ

[Demo page](https://masatomakino.github.io/color-word-cloud/)

![](https://www.evernote.com/l/AAmDyd4ndq9PzquNUu-w3YT2RsLkS1fp3aEB/image.png)

## Getting Started

このリポジトリをローカルにクローンしてください。
詳しい手順は [textbook 内のこちらの章](https://github.com/MasatoMakino/color-word-cloud/blob/master/textbook/02_%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97.md#%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89) を参照してください。

![](https://www.evernote.com/l/AAlWHdGVdXpEXr_zz1K9aUKC1GuXocPyOTAB/image.png)

## npm scripts

"bundle": srcディレクトリ内のJavaScriptコードをトランスパイルし、distディレクトリに出力します。Webブラウザー上で動作するJavaScriptコードが生成されます。

"watch:bundle": bundleコマンドにwatchオプションを追加したコマンドです。開発中に利用します。

"lib": taskディレクトリ内のJavaScriptコードをトランスパイルし、libディレクトリに出力します。node.js上で動作するJavaScriptコードが生成されます。

"watch:lib": libコマンドにwatchオプションを追加したコマンドです。開発中に利用します。

"trends": Google Trends APIを利用して、色彩語使用頻度リストをdocsディレクトリに出力します。

## License

[MIT licensed](LICENSE).
