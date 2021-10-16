# CSI_System
Check self-introduction System for discord

# 概要
CSI_Systemは指定されたチャンネルにユーザのメッセージがあるかどうかを判定するプログラムです。

# 使用ライブラリ

Discord.js V12

# 使い方
本プログラムの使用には事前にDiscord Developer Portalでのトークンの取得、また動作させるサーバーIDが必要です。

またローカルのPCでのご利用にはnode.jsが必要です。

1.本リポジトリをダウンロード＆解凍し、お好きなところに配置してください。

1.discord_bot.jsを開きDISCORD_TOKENのところにDiscord Developer Portalで取得したトークン、SET_CHANNELにメッセージを取得したいチャンネルのIDを入力してください。
    1.*トークンは絶対にインターネット上に公開しないでください。

1.各種ターミナルでdiscord_bot.jsがあるディレクトリに移動し、`node discord_bot.js`と入力してください。

1.ターミナルにてログインが確認されたらDiscordで`/CSI -help`と入力してください。

1. Helpを参照してお使いください。

# 機能


`/CSI -help`: 本プログラムのヘルプを表示します。

`/CSI`: 指定されたチャンネルにメッセージを送信しているユーザーとしていないユーザーを表示します。

`/CSI [username]`: 指定されたチャンネルに指定されたユーザーがメッセージを送信しているかを判定します。

# Note

本プログラムにはDiscord.js V12 を用いています。その関係で一部機能に制約があります。

1.取得できるメッセージが100件まで。
    1.プログラム内にコメント化した400件まで取り出せるものがありますが、それを使用する場合、プログラムの書き換えが必要です。
  
# Author

* Hz
* Discord: Ryupex#1243


# License

Copyright (c) 2021 Hz

[Released under the MIT license](https://opensource.org/licenses/mit-license.php)
