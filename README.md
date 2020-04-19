# color-word-cloud

> word cloud generator for color words.

Google Trends API を利用した、色彩語ワードクラウドジェネレーターです。

## デモページ

[Demo page](https://masatomakino.github.io/color-word-cloud/)

## Getting Started

このリポジトリをローカルにクローンしてください。
詳しい手順は[textbook 内のこちらの章](https://github.com/MasatoMakino/color-word-cloud/blob/master/textbook/02_%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97.md#%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89)を参照してください。

![](https://www.evernote.com/l/AAlWHdGVdXpEXr_zz1K9aUKC1GuXocPyOTAB/image.png)

## npm scripts

"bundle": src ディレクトリ内の JavaScript コードをトランスパイルし、dist ディレクトリに出力します。Web ブラウザー上で動作する JavaScript コードが生成されます。

"watch:bundle": bundle コマンドに watch オプションを追加したコマンドです。

"lib": task ディレクトリ内の JavaScript コードをトランスパイルし、lib ディレクトリに出力します。node.js 上で動作する JavaScript コードが生成されます。

"watch:lib": lib コマンドに watch オプションを追加したコマンドです。

"trends": Google Trends API を利用して、色彩語使用頻度リストを docs ディレクトリに出力します。

## License

[MIT licensed](LICENSE).
