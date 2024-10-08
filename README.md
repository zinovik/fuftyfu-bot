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
curl https://api.telegram.org/bot<TELEGRAM_TOKEN>/setWebhook?url=https://europe-central2-zinovik-project.cloudfunctions.net/fuftyfu-bot?token=<TOKEN>
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

### create service accounts

```bash
gcloud iam service-accounts create github-actions
gcloud iam service-accounts create fuftyfu
```

### add roles (`Service Account User` and `Cloud Functions Admin`) to the service account you want to use to deploy the function

```
gcloud projects add-iam-policy-binding zinovik-project --member="serviceAccount:github-actions@zinovik-project.iam.gserviceaccount.com" --role="roles/cloudfunctions.admin"

gcloud projects add-iam-policy-binding zinovik-project --member="serviceAccount:github-actions@zinovik-project.iam.gserviceaccount.com" --role="roles/iam.serviceAccountUser"
```

### creating keys for service account for github-actions `GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY_FILE`

```bash
gcloud iam service-accounts keys create key-file.json --iam-account=github-actions@zinovik-project.iam.gserviceaccount.com
cat key-file.json | base64
```

### add access to secrets and bucket

```
gcloud projects add-iam-policy-binding zinovik-project --member="serviceAccount:fuftyfu@zinovik-project.iam.gserviceaccount.com" --role="roles/secretmanager.secretAccessor"

gcloud storage buckets add-iam-policy-binding gs://hedgehogs --member="serviceAccount:fuftyfu@zinovik-project.iam.gserviceaccount.com" --role="roles/storage.admin"
```

### add secrets

```
printf "TELEGRAM_TOKEN" | gcloud secrets create fuftyfu-bot-telegram-token --locations=europe-central2 --replication-policy="user-managed" --data-file=-

printf "TOKEN" | gcloud secrets create fuftyfu-bot-app-token --locations=europe-central2 --replication-policy="user-managed" --data-file=-
```
