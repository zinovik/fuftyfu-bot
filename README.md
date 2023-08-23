[![Build Status](https://travis-ci.org/zinovik/fuftyfu-bot.svg?branch=master)](https://travis-ci.org/zinovik/fuftyfu-bot)
[![Netlify Status](https://api.netlify.com/api/v1/badges/875db5e2-3246-4680-ad42-7bb637fff095/deploy-status)](https://app.netlify.com/sites/fuftyfu-bot/deploys)

![logo](./avatar/fuftyfubot.jpg)

**working**

1. fill .env

2. start project
```bash
docker-compose up
```
or
```bash
NODE_OPTIONS=--openssl-legacy-provider npm run start:lambda
```

3. setup bot
```bash
 curl https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://fuftyfu-bot.netlify.com/.netlify/functions/index
```

**testing**

```bash
curl --location 'localhost:9000/.netlify/functions/index' \
--header 'Content-Type: application/json' \
--data '{
    "message": {
        "from": {
            "first_name": "max",
            "language_code": "en"
        },
        "chat": {
            "id": "446618160"
        },
        "text": "find brest"
    }
}'
```

```bash
 curl https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<NGROK ID>.ngrok.io/index
~/ngrok http 9000
```
