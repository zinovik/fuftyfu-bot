FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src ./src
COPY tsconfig.json ./
RUN npm run build

RUN npm prune --production

###

FROM node:24-alpine

WORKDIR /app

# add non‑root user
RUN addgroup -S app && adduser -S app -G app
USER app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
# (optional) copy src if you need source maps:
# COPY --from=builder /app/src ./src

EXPOSE 8080

CMD ["node", "dist/index.js"]
