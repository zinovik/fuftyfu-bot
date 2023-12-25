![logo](./avatar/fuftyfubot.jpg)

**working**

1. fill .env

2. start project

```bash
docker-compose up
```

or

```bash
npm run dev
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
~/ngrok http 8080
```

## google cloud setup

### create service account

```bash
gcloud iam service-accounts create github-actions
```

### add roles (`Service Account User` and `Cloud Functions Admin`) to the service account you want to use to deploy the function

```
gcloud projects add-iam-policy-binding zinovik-project --member="serviceAccount:github-actions@zinovik-project.iam.gserviceaccount.com" --role="roles/cloudfunctions.admin"

gcloud projects add-iam-policy-binding zinovik-project --member="serviceAccount:github-actions@zinovik-project.iam.gserviceaccount.com" --role="roles/iam.serviceAccountUser"
```

### creating keys for service account for github-actions `GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY_FILE`

```bash
gcloud iam service-accounts keys create key-file.json --iam-account=github-actions@appspot.gserviceaccount.com
cat key-file.json | base64
```

### creating `ENV` value

```bash
cat env.yaml | base64
```
