# chat-app
チャットアプリのクローンサイト。

## Description
チャットアプリのクローンサイト。チャットができるサイトです。
ユーザー登録、ユーザー編集、コメント投稿などの機能が実装されています。


## Features

- haml/SASS記法と、命名規則BEMを使ったマークアップ
- ajaxを使用した非同期処理

## Requirement

- Ruby 2.6.5
- Rails 6.0.0

## 実装内容
チャット機能実装_サーバーサイド＆マークアップ
ユーザー登録機能_サーバーサイド＆マークアップ
ユーザー編集機能_サーバーサイド＆マークアップ
カレンダー機能_サーバーサイド＆マークアップ
Googleに飛ぶ機能
絵文字サイトに飛ぶ機能

## Installation
    chat-app
    $ cd chat-app
    $ bundle install

## users table
|Column|Type|Options|
|------|----|-------|
|nickname|string|null false|
|firstname|string|null false|
|lastname|string|null false|
|email|string|null false, unique true|
|password|string|null false|

### Association
- has_one :address
- has_many :messages
- has_many :groups

## messages table
|Column|Type|Options|
|------|----|-------|
|name|string|null false|

### Association
- belongs_to :user

## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null false|

### Association
- has_many :user

