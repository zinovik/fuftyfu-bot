
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
curl https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://us-central1-zinovik-project.cloudfunctions.net/fuftyfu-bot
```

**testing**

```bash
curl --location 'localhost:8080' \
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
