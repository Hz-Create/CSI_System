# CSI_System
Check self-introduction System for discord

# 概要
CSI_Systemは指定されたチャンネルにユーザのメッセージがあるかどうかを判定するプログラムです。

# 使用ライブラリ

Discord.js V13

# 使い方
本プログラムの使用には事前にDiscord Developer Portalでのトークンの取得、また動作させるサーバーIDが必要です。

またローカルのPCでのご利用にはnode.jsが必要です。

1. 本リポジトリをダウンロード＆解凍し、お好きなところに配置してください。

1. discord_bot.jsを開きDISCORD_TOKENのところにDiscord Developer Portalで取得したトークン、SET_CHANNELにメッセージを取得したいチャンネルのIDを入力してください。
    1. *トークンは絶対にインターネット上に公開しないでください。

1. 各種ターミナルでdiscord_bot.jsがあるディレクトリに移動し、`node discord_bot.js`と入力してください。

1. ターミナルにてログインが確認されたらDiscordで`/csi -help`と入力してください。

1. Helpを参照してお使いください。

# 機能

本プログラムはSlashComanndを使用できます。

`/csi -help`: 本プログラムのヘルプを表示します。

`/csi all`: 指定されたチャンネルにメッセージを送信しているユーザーとしていないユーザーを表示します。

`/csi user target: [username]`: 指定されたチャンネルに指定されたユーザーがメッセージを送信しているかを判定します。

# Note

本プログラムにはDiscord.js V13を用いています。その関係で一部機能に制約があります。

1. 取得できるメッセージが100件まで。
    1. プログラム内にコメント化した400件まで取り出せるものがありますが、それを使用する場合、プログラムの書き換えが必要です。
    2. 上のプログラム: [100件以上のメッセージを取得する方法](https://scrapbox.io/discordjs-japan/100%E4%BB%B6%E4%BB%A5%E4%B8%8A%E3%81%AE%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)\

1. ディレクトリの中にDiscord.js V12の旧バージョンもあります。ご自由にお使いください。


また本プログラムの文章は製作者の使用に特化した文章になっているので、そちらも適宜修正してお使いください。
# Author

* Hz
* Discord: Ryupex#1243


# License

Copyright (c) 2021 Hz

[Released under the MIT license](https://opensource.org/licenses/mit-license.php)
