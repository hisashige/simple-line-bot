# simple-line-bot

sample LINE Messagin API

NodeJS ✖️ TypeScript ✖️ Express

### ローカル環境構築

.envの下記をLINE管理画面から転記

```
CHANNEL_ACCESS_TOKEN=
CHANNEL_SECRET=
```

必要なパッケージをインストールして、ローカルサーバ起動。

```
yarn

yarn build:watch

yarn start:dev

```

localhost:3000でサーバが起動するので、ngrokなどでMessaging APIのチャネルのwebhookにURLを記載して動作を確かめる。
